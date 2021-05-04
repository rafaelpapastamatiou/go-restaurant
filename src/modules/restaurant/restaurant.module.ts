import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Invoice } from './entities/invoice.entity';
import { OrderDish } from './entities/order-dish.entity';
import { Order } from './entities/order.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Order, OrderDish, Invoice])],
  controllers: [],
  providers: [],
  exports: [],
})
export class RestaurantModule {}
