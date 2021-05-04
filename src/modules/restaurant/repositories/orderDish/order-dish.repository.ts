import { HttpException, HttpStatus } from '@nestjs/common';
import { Repository, EntityRepository } from 'typeorm';
import { CreateOrderDishDTO } from '../../dtos/orderDishes/create-order-dish-dto';
import { OrderDishIdentifierDTO } from '../../dtos/orderDishes/order-dish-identifier.dto';
import { UpdateOrderDishDTO } from '../../dtos/orderDishes/update-order-dish.dto';

import { OrderDish } from '../../entities/order-dish.entity';
import { OrderDishRepositoryInterface } from './order-dish.repository.interface';

@EntityRepository(OrderDish)
export class OrderDishRepository
  extends Repository<OrderDish>
  implements OrderDishRepositoryInterface {
  async findByOrderId(orderId: number): Promise<OrderDish[]> {
    const orderDishes = await this.find({
      where: { orderId },
    });

    return orderDishes;
  }

  async findByDishId(dishId: number): Promise<OrderDish[]> {
    const orderDishes = await this.find({
      where: { dishId },
    });

    return orderDishes;
  }

  async findByOrderAndDish({
    orderId,
    dishId,
  }: OrderDishIdentifierDTO): Promise<OrderDish> {
    const orderDishes = await this.findOne({
      where: { orderId, dishId },
    });

    return orderDishes;
  }

  async createOrderDish({
    dishId,
    orderId,
    quantity,
    note,
  }: CreateOrderDishDTO): Promise<OrderDish> {
    const orderDish = this.create({
      dishId,
      orderId,
      quantity,
      note,
    });

    await this.save(orderDish);

    return orderDish;
  }

  async updateOrderDish({
    dishId,
    orderId,
    ...newValues
  }: UpdateOrderDishDTO): Promise<OrderDish> {
    let orderDish = await this.findByOrderAndDish({ dishId, orderId });

    if (!orderDish) {
      throw new HttpException('Order dish not found', HttpStatus.BAD_REQUEST);
    }

    orderDish = Object.assign(orderDish, { ...newValues });

    await this.save(orderDish);

    return orderDish;
  }

  async deleteOrderDish({
    dishId,
    orderId,
  }: OrderDishIdentifierDTO): Promise<void> {
    const orderDish = await this.findByOrderAndDish({ orderId, dishId });

    if (!orderDish) {
      throw new HttpException('Order dish not found', HttpStatus.BAD_REQUEST);
    }

    await this.remove(orderDish);
  }
}
