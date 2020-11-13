import { Module } from '@nestjs/common';
import { InMemoryDBModule } from '@nestjs-addons/in-memory-db';

import { ApiUserProfileModule } from '@hutch/api/user-profile';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    InMemoryDBModule.forRoot(),
    ApiUserProfileModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
