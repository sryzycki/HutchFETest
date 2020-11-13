import { Test } from '@nestjs/testing';
import { ApiUserProfileController } from './api-user-profile.controller';

describe('ApiUserProfileController', () => {
  let controller: ApiUserProfileController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [],
      controllers: [ApiUserProfileController],
    }).compile();

    controller = module.get(ApiUserProfileController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
