import { Module } from '@nestjs/common';
import { InMemoryDBModule } from '@nestjs-addons/in-memory-db';

import { ApiUserProfileController } from './api-user-profile.controller';

@Module({
  imports: [
    InMemoryDBModule.forFeature('user-profile'),
  ],
  controllers: [ApiUserProfileController],
  providers: [],
  exports: [],
})
export class ApiUserProfileModule {}
