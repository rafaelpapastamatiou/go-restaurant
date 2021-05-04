import { AccountIdentifierDTO } from 'src/shared/dtos/account/account-identifier.dto';
import { CreateOrderDTO } from '../../dtos/order/create-order.dto';
import { OrderIdentifierDTO } from '../../dtos/order/order-identifier.dto';

import { Order } from '../../entities/order.entity';

export interface OrderRepositoryInterface {
  findAll(identifier: AccountIdentifierDTO): Promise<Order[]>;
  findById(identifier: OrderIdentifierDTO): Promise<Order | undefined>;
  createOrder(data: CreateOrderDTO): Promise<Order>;
  deleteOrder(identifier: OrderIdentifierDTO): Promise<void>;
}
