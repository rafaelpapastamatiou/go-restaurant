import { CreateOrderDTO } from '../../dtos/order/create-order.dto';
import { OrderIdentifierDTO } from '../../dtos/order/order-identifier.dto';

import { Order } from '../../entities/order.entity';

export interface OrderRepositoryInterface {
  findByAccountId(accountId: number): Promise<Order[]>;
  findById(identifier: OrderIdentifierDTO): Promise<Order | undefined>;
  createOrder(data: CreateOrderDTO): Promise<Order>;
  deleteOrder(identifier: OrderIdentifierDTO): Promise<void>;
}
