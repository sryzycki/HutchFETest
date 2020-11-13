import { Injectable } from '@angular/core';
import { select, Store, Action } from '@ngrx/store';

import * as fromUserProfile from './user-profile.reducer';
import * as UserProfileSelectors from './user-profile.selectors';
import * as UserProfileActions from './user-profile.actions';

@Injectable()
export class UserProfileFacade {
  error$ = this.store.pipe(select(UserProfileSelectors.getUserProfileError));
  loaded$ = this.store.pipe(select(UserProfileSelectors.getUserProfileLoaded));
  allUserProfile$ = this.store.pipe(
    select(UserProfileSelectors.getAllUserProfile)
  );
  selectedUserProfile$ = this.store.pipe(
    select(UserProfileSelectors.getSelected)
  );

  constructor(private store: Store<fromUserProfile.UserProfilePartialState>) {}

  dispatch(action: Action) {
    this.store.dispatch(action);
  }

  public getAll(): void {
    this.store.dispatch(UserProfileActions.loadUserProfile());
  }
}
