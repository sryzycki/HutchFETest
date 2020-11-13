import { UserProfileEntity } from './user-profile.models';
import * as UserProfileActions from './user-profile.actions';
import { State, initialState, reducer } from './user-profile.reducer';

describe('UserProfile Reducer', () => {
  const createUserProfileEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as UserProfileEntity);

  beforeEach(() => {});

  describe('valid UserProfile actions', () => {
    it('loadUserProfileSuccess should return set the list of known UserProfile', () => {
      const userProfile = [
        createUserProfileEntity('PRODUCT-AAA'),
        createUserProfileEntity('PRODUCT-zzz'),
      ];
      const action = UserProfileActions.loadUserProfileSuccess({ userProfile });

      const result: State = reducer(initialState, action);

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
