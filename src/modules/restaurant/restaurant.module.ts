import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Invoice } from './entities/invoice.entity';
import { OrderDish } from './entities/order-dish.entity';
import { Order } from './entities/order.entity';
import { InvoiceRepository } from './repositories/invoice/invoice.repository';
import { OrderRepository } from './repositories/order/order.repository';
import { OrderDishRepository } from './repositories/orderDish/order-dish.repository';
import { InvoiceService } from './services/invoice.service';
import { OrderDishService } from './services/order-dish.service';
import { OrderService } from './services/order.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Order,
      OrderRepository,
      OrderDish,
      OrderDishRepository,
      Invoice,
      InvoiceRepository,
    ]),
  ],
  controllers: [],
  providers: [OrderService, OrderDishService, InvoiceService],
  exports: [],
})
export class RestaurantModule {}
