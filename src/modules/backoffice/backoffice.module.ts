import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { DishController } from './controllers/dish.controller';
import { TableController } from './controllers/table.controller';
import { CategoryController } from './controllers/category.controller';

import { Category } from './entities/category.entity';
import { Dish } from './entities/dish.entity';
import { Table } from './entities/table.entity';
import { CategoryRepository } from './repositories/category/category.repository';
import { DishRepository } from './repositories/dish/dish.repository';
import { TableRepository } from './repositories/table/table.repository';
import { CategoryService } from './services/category.service';
import { DishService } from './services/dish.service';
import { TableService } from './services/table.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Category,
      CategoryRepository,
      Dish,
      DishRepository,
      Table,
      TableRepository,
    ]),
  ],
  controllers: [TableController, CategoryController, DishController],
  providers: [CategoryService, DishService, TableService],
  exports: [],
})
export class BackofficeModule {}
