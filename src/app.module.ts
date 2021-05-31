import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AuthModule } from './modules/auth/auth.module';
import { BackofficeModule } from './modules/backoffice/backoffice.module';
import { RestaurantModule } from './modules/restaurant/restaurant.module';

import { JwtAuthGuard } from './shared/guards/jwt-auth.guard';

import { configuration } from './config/configuration';
import * as ormconfig from './config/ormconfig';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    TypeOrmModule.forRoot(ormconfig),
    ThrottlerModule.forRoot({
      ttl: 60,
      limit: 20,
    }),
    AuthModule,
    BackofficeModule,
    RestaurantModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class AppModule {}
