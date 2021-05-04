import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AuthModule } from './modules/auth/auth.module';
import { BackofficeModule } from './modules/backoffice/backoffice.module';
import { RestaurantModule } from './modules/restaurant/restaurant.module';

import { JwtAuthGuard } from './shared/guards/jwt-auth.guard';

import { configuration } from './config/configuration';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        name: 'default',
        type: 'sqlite',
        database: configService.get<string>('database.database'),
        entities: ['{src,dist}/modules/**/entities/*.entity.{js, ts}'],
        migrations: ['{src,dist}/shared/typeorm/migrations/*.{js, ts}'],
        cli: {
          migrationsDir: '{src,dist}/shared/typeorm/migrations',
        },
        synchronize: false,
        logging: configService.get<boolean>('database.logging'),
      }),
    }),
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
