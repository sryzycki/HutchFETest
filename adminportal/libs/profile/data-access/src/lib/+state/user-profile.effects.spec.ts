import { TestBed, async } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { NxModule, DataPersistence } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';

import { UserProfileEffects } from './user-profile.effects';
import * as UserProfileActions from './user-profile.actions';

describe('UserProfileEffects', () => {
  let actions: Observable<any>;
  let effects: UserProfileEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        UserProfileEffects,
        DataPersistence,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.get(UserProfileEffects);
  });

  describe('loadUserProfile$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: UserProfileActions.loadUserProfile() });

      const expected = hot('-a-|', {
        a: UserProfileActions.loadUserProfileSuccess({ userProfile: [] }),
      });

      expect(effects.loadUserProfile$).toBeObservable(expected);
    });
  });
});
