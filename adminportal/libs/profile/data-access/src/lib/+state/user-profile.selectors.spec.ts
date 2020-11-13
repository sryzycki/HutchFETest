import { UserProfileEntity } from './user-profile.models';
import {
  State,
  userProfileAdapter,
  initialState,
} from './user-profile.reducer';
import * as UserProfileSelectors from './user-profile.selectors';

describe('UserProfile Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getUserProfileId = (it) => it['id'];
  const createUserProfileEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as UserProfileEntity);

  let state;

  beforeEach(() => {
    state = {
      userProfile: userProfileAdapter.setAll(
        [
          createUserProfileEntity('PRODUCT-AAA'),
          createUserProfileEntity('PRODUCT-BBB'),
          createUserProfileEntity('PRODUCT-CCC'),
        ],
        {
          ...initialState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('UserProfile Selectors', () => {
    it('getAllUserProfile() should return the list of UserProfile', () => {
      const results = UserProfileSelectors.getAllUserProfile(state);
      const selId = getUserProfileId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = UserProfileSelectors.getSelected(state);
      const selId = getUserProfileId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it("getUserProfileLoaded() should return the current 'loaded' status", () => {
      const result = UserProfileSelectors.getUserProfileLoaded(state);

      expect(result).toBe(true);
    });

    it("getUserProfileError() should return the current 'error' state", () => {
      const result = UserProfileSelectors.getUserProfileError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
