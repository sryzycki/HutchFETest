import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  USERPROFILE_FEATURE_KEY,
  State,
  UserProfilePartialState,
  userProfileAdapter,
} from './user-profile.reducer';

// Lookup the 'UserProfile' feature state managed by NgRx
export const getUserProfileState = createFeatureSelector<
  UserProfilePartialState,
  State
>(USERPROFILE_FEATURE_KEY);

const { selectAll, selectEntities } = userProfileAdapter.getSelectors();

export const getUserProfileLoaded = createSelector(
  getUserProfileState,
  (state: State) => state.loaded
);

export const getUserProfileError = createSelector(
  getUserProfileState,
  (state: State) => state.error
);

export const getAllUserProfile = createSelector(
  getUserProfileState,
  (state: State) => selectAll(state)
);

export const getUserProfileEntities = createSelector(
  getUserProfileState,
  (state: State) => selectEntities(state)
);

export const getSelectedId = createSelector(
  getUserProfileState,
  (state: State) => state.selectedId
);

export const getSelected = createSelector(
  getUserProfileEntities,
  getSelectedId,
  (entities, selectedId) => selectedId && entities[selectedId]
);
