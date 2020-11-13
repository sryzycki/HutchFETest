import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';

import { UserProfileEntity } from '@hutch/profile/domain';

import { UserProfileService } from '../user-profile.service';
import * as UserProfileActions from './user-profile.actions';

@Injectable()
export class UserProfileEffects {
  loadUserProfile$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserProfileActions.loadUserProfile),
      fetch({
        run: (action) => {
          return this.userProfileService.getAll().pipe(
            map((data: UserProfileEntity[]) => {
              return UserProfileActions.loadUserProfileSuccess({ userProfile: data });
            }),
          );
        },

        onError: (action, error) => {
          return UserProfileActions.loadUserProfileFailure({ error });
        },
      })
    )
  );

  constructor(
    private actions$: Actions,
    private userProfileService: UserProfileService,
  ) {}
}
