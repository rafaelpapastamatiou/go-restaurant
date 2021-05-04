import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AccountIdentifierDTO } from 'src/shared/dtos/account/account-identifier.dto';
import { CreateOrderDTO } from '../dtos/order/create-order.dto';
import { OrderIdentifierDTO } from '../dtos/order/order-identifier.dto';
import { Order } from '../entities/order.entity';
import { OrderRepository } from '../repositories/order/order.repository';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(OrderRepository)
    private readonly orderRepository: OrderRepository,
  ) {}

  async findById(identifier: OrderIdentifierDTO): Promise<Order> {
    const order = await this.orderRepository.findById(identifier);

    return order;
  }

  async findAll(identifier: AccountIdentifierDTO): Promise<Order[]> {
    const orders = await this.orderRepository.findAll(identifier);

    return orders;
  }

  async create(data: CreateOrderDTO): Promise<Order> {
    const order = await this.orderRepository.createOrder(data);

    return order;
  }

  async delete(identifier: OrderIdentifierDTO): Promise<void> {
    await this.orderRepository.deleteOrder(identifier);
  }
}
