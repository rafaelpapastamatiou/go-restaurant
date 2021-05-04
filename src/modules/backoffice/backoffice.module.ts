import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Category } from './entities/category.entity';
import { Dish } from './entities/dish.entity';
import { Seat } from './entities/seat.entity';
import { CategoryRepository } from './repositories/category/category.repository';
import { DishRepository } from './repositories/dish/dish.repository';
import { SeatRepository } from './repositories/seat/seat.repository';
import { CategoryService } from './services/category.service';
import { DishService } from './services/dish.service';
import { SeatService } from './services/seat.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Category,
      CategoryRepository,
      Dish,
      DishRepository,
      Seat,
      SeatRepository,
    ]),
  ],
  controllers: [],
  providers: [CategoryService, DishService, SeatService],
  exports: [],
})
export class BackofficeModule {}
