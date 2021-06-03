import { AccountIdentifierDTO } from 'src/shared/dtos/account/account-identifier.dto';
import { CreateOrderEntityDTO } from '../../dtos/order/create-order.dto';
import { OrderIdentifierDTO } from '../../dtos/order/order-identifier.dto';

import { Order } from '../../entities/order.entity';

export interface OrderRepositoryInterface {
  findAll(identifier: AccountIdentifierDTO): Promise<Order[]>;
  findAllPending(identifier: AccountIdentifierDTO): Promise<Order[]>;
  findById(identifier: OrderIdentifierDTO): Promise<Order | undefined>;
  createOrder(data: CreateOrderEntityDTO): Promise<Order>;
  deleteOrder(identifier: OrderIdentifierDTO): Promise<void>;
  finishOrder(order: Order): Promise<Order>;
}
