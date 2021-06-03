import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AccountIdentifierDTO } from 'src/shared/dtos/account/account-identifier.dto';
import { Repository } from 'typeorm';
import { CreateOrderDTO } from '../dtos/order/create-order.dto';
import { OrderIdentifierDTO } from '../dtos/order/order-identifier.dto';
import { OrderDish } from '../entities/order-dish.entity';
import { Order } from '../entities/order.entity';
import { OrderRepository } from '../repositories/order/order.repository';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(OrderRepository)
    private readonly orderRepository: OrderRepository,
    @InjectRepository(OrderDish)
    private orderDishRepository: Repository<OrderDish>,
  ) {}

  async findById(identifier: OrderIdentifierDTO): Promise<Order> {
    const order = await this.orderRepository.findById(identifier);

    return order;
  }

  async findAll(identifier: AccountIdentifierDTO): Promise<Order[]> {
    const orders = await this.orderRepository.findAll(identifier);

    return orders;
  }

  async findAllPending(identifier: AccountIdentifierDTO): Promise<Order[]> {
    const orders = await this.orderRepository.findAllPending(identifier);

    return orders;
  }

  async create({ accountId, dishes, tableId }: CreateOrderDTO): Promise<Order> {
    const order = await this.orderRepository.createOrder({
      accountId,
      tableId,
    });

    const orderDishes = await Promise.all(
      dishes.map(async (dish) => {
        const orderDish = new OrderDish();

        orderDish.dishId = dish.dishId;
        orderDish.quantity = dish.quantity;
        orderDish.orderId = order.id;
        orderDish.note = dish.note;

        await this.orderDishRepository.save(orderDish);

        return orderDish;
      }),
    );

    order.orderDishes = orderDishes;

    await this.orderRepository.save(order);

    return order;
  }

  async finish(identifier: OrderIdentifierDTO): Promise<Order> {
    const order = await this.orderRepository.findById(identifier);

    if (!order) {
      throw new HttpException('Order not found.', HttpStatus.BAD_REQUEST);
    }

    if (order.finished) {
      throw new HttpException(
        'Order already finished.',
        HttpStatus.BAD_REQUEST,
      );
    }

    const finishedOrder = await this.orderRepository.finishOrder(order);

    return finishedOrder;
  }

  async delete(identifier: OrderIdentifierDTO): Promise<void> {
    await this.orderRepository.deleteOrder(identifier);
  }
}
