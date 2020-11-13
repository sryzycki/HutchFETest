import { createReducer, on, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import { UserProfileEntity } from '@hutch/profile/domain';

import * as UserProfileActions from './user-profile.actions';

export const USERPROFILE_FEATURE_KEY = 'userProfile';

export interface State extends EntityState<UserProfileEntity> {
  selectedId?: string | number; // which UserProfile record has been selected
  loaded: boolean; // has the UserProfile list been loaded
  error?: string | null; // last known error (if any)
}

export interface UserProfilePartialState {
  readonly [USERPROFILE_FEATURE_KEY]: State;
}

export const userProfileAdapter: EntityAdapter<UserProfileEntity> = createEntityAdapter<
  UserProfileEntity
>();

export const initialState: State = userProfileAdapter.getInitialState({
  // set initial required properties
  loaded: false,
});

const userProfileReducer = createReducer(
  initialState,
  on(UserProfileActions.loadUserProfile, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(UserProfileActions.loadUserProfileSuccess, (state, { userProfile }) =>
    userProfileAdapter.setAll(userProfile, { ...state, loaded: true })
  ),
  on(UserProfileActions.loadUserProfileFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return userProfileReducer(state, action);
}
