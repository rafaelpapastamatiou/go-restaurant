import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { InvoiceController } from './controllers/invoice.controller';
import { OrderFinishController } from './controllers/order-finish.controller';
import { OrderPendingController } from './controllers/order-pending.controller';
import { OrderController } from './controllers/order.controller';
import { Invoice } from './entities/invoice.entity';
import { OrderDish } from './entities/order-dish.entity';
import { Order } from './entities/order.entity';
import { InvoiceRepository } from './repositories/invoice/invoice.repository';
import { OrderRepository } from './repositories/order/order.repository';
import { InvoiceService } from './services/invoice.service';
import { OrderService } from './services/order.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Order,
      OrderRepository,
      OrderDish,
      Invoice,
      InvoiceRepository,
    ]),
  ],
  controllers: [
    OrderController,
    OrderFinishController,
    OrderPendingController,
    InvoiceController,
  ],
  providers: [OrderService, InvoiceService],
  exports: [],
})
export class RestaurantModule {}
