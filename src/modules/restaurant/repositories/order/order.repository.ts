import { HttpException, HttpStatus } from '@nestjs/common';
import { AccountIdentifierDTO } from 'src/shared/dtos/account/account-identifier.dto';
import { Repository, EntityRepository } from 'typeorm';
import { CreateOrderEntityDTO } from '../../dtos/order/create-order.dto';
import { OrderIdentifierDTO } from '../../dtos/order/order-identifier.dto';

import { Order } from '../../entities/order.entity';
import { OrderRepositoryInterface } from './order.repository.interface';

@EntityRepository(Order)
export class OrderRepository
  extends Repository<Order>
  implements OrderRepositoryInterface {
  async findAll({ accountId }: AccountIdentifierDTO): Promise<Order[]> {
    const orders = await this.find({
      where: { accountId },
    });

    return orders;
  }

  async findAllPending({ accountId }: AccountIdentifierDTO): Promise<Order[]> {
    const orders = await this.find({
      where: { accountId, finished: false },
    });

    return orders;
  }

  async findById({
    id,
    accountId,
  }: OrderIdentifierDTO): Promise<Order | undefined> {
    const order = await this.findOne({
      where: {
        id,
        accountId,
      },
    });

    return order;
  }

  async createOrder({
    accountId,
    tableId,
  }: CreateOrderEntityDTO): Promise<Order> {
    const order = this.create({
      accountId,
      tableId,
    });

    await this.save(order);

    return order;
  }

  async finishOrder(order: Order): Promise<Order> {
    const finishedOrder = Object.assign(order, {
      finished: true,
    });

    await this.save(finishedOrder);

    return finishedOrder;
  }

  async deleteOrder({ id, accountId }: OrderIdentifierDTO): Promise<void> {
    const order = await this.findById({ id, accountId });

    if (!order) {
      throw new HttpException('Order not found', HttpStatus.BAD_REQUEST);
    }

    await this.remove(order);
  }
}
