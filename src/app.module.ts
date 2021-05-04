import { Module } from '@nestjs/common';

import { AuthModule } from './modules/auth/auth.module';
import { BackofficeModule } from './modules/backoffice/backoffice.module';
import { RestaurantModule } from './modules/restaurant/restaurant.module';

@Module({
  imports: [AuthModule, BackofficeModule, RestaurantModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
