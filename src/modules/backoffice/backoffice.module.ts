import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Category } from './entities/category.entity';
import { Dish } from './entities/dish.entity';
import { Seat } from './entities/seat.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Category, Dish, Seat])],
  controllers: [],
  providers: [],
  exports: [],
})
export class BackofficeModule {}
