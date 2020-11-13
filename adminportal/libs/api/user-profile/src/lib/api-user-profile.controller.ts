import {
  Controller,
  Get,
  Header,
  ImATeapotException,
  Query,
  Request,
  Headers,
  Req, UnauthorizedException
} from '@nestjs/common';
import { InMemoryDBEntityController, InMemoryDBService } from '@nestjs-addons/in-memory-db';

import { getRandomInt } from '@hutch/shared/util-math';
import { UserProfileEntity } from '@hutch/profile/domain';

@Controller('user-profiles')
export class ApiUserProfileController extends InMemoryDBEntityController<UserProfileEntity> {
  constructor(
    protected dbService: InMemoryDBService<UserProfileEntity>,
  ) {
    super(dbService);
    // Mock some data.
    dbService.seed(userProfileEntityFactory, 10);
  }

  @Get()
  getAll(
    @Req() request: Request,
    @Query('idFilter') idFilter: string,
  ): UserProfileEntity[] {
    // Fake JWT validation.
    const authHeader = request.headers['authorization'];
    if (!authHeader) {
      throw new UnauthorizedException();
    }

    // Challenge the UI a bit.
    throwExceptionEveryNowAndThen();

    if (idFilter) {
      return this.dbService.query(record => record.id === idFilter);
    } else {
      return this.dbService.getAll();
    }
  }
}

function userProfileEntityFactory(index: number): Partial<UserProfileEntity> {
  return {
    "appId": 'com.hutchgames.rebelracing',
    "flags": 264,
    "deviceId": "CD396ED4-646C-4BF6-B2C8-C47D0456A424",
    "region": "we",
    "socialName": `Geoff Pate ${index}`,
    "registrationDate": new Date("2019-11-06T18:19:44.558Z"),
    "lastLoginDate": new Date("2020-09-07T16:59:20.088Z"),
    "cohorts": {},
    "hutchAccountRerouteId": null,
    "hutchAccountRerouteRegion": null,
    "activeQuests": 0,
    "completedQuests": 0,
    "claimedQuests": 0,
    "nextQuestActiveAt": new Date("1970-01-01T00:00:00.000Z"),
    "previousLoginDate": new Date("2020-09-07T16:59:19.431Z"),
    "locale": "EN",
    "hardCurrency1": 95,
    "hardCurrency2": 32429,
    "hardCurrency3": 0,
    "softCurrency1": 0,
    "xp": 85574,
    "level": 100,
    "garageSlotsUsed": 64,
    "bronzeKeys": 1487,
    "silverKeys": 1489,
    "goldKeys": 848,
    "trophies": 5190
  };
}

function throwExceptionEveryNowAndThen(): void {
  const shouldThrowRandomException = getRandomInt(10) > 6;
  if (shouldThrowRandomException) {
    console.log('[ApiUserProfileController] Throwing a random "ImATeapotException" exception...');
    throw new ImATeapotException();
  }
}
