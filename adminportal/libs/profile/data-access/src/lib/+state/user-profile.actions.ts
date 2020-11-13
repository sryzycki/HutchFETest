import { createAction, props } from '@ngrx/store';

import { UserProfileEntity } from '@hutch/profile/domain';

export const loadUserProfile = createAction('[UserProfile] Load UserProfile');

export const loadUserProfileSuccess = createAction(
  '[UserProfile] Load UserProfile Success',
  props<{ userProfile: UserProfileEntity[] }>()
);

export const loadUserProfileFailure = createAction(
  '[UserProfile] Load UserProfile Failure',
  props<{ error: any }>()
);
