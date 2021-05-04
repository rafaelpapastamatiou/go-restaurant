import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateOrderDishDTO } from '../dtos/orderDishes/create-order-dish-dto';
import { OrderDishIdentifierDTO } from '../dtos/orderDishes/order-dish-identifier.dto';
import { UpdateOrderDishDTO } from '../dtos/orderDishes/update-order-dish.dto';
import { OrderDish } from '../entities/order-dish.entity';
import { OrderDishRepository } from '../repositories/orderDish/order-dish.repository';

@Injectable()
export class OrderDishService {
  constructor(
    @InjectRepository(OrderDishRepository)
    private readonly orderDishRepository: OrderDishRepository,
  ) {}

  async findById(identifier: OrderDishIdentifierDTO): Promise<OrderDish> {
    const orderDish = await this.orderDishRepository.findByOrderAndDish(
      identifier,
    );

    return orderDish;
  }

  async findByOrderId(orderId: number): Promise<OrderDish[]> {
    const orderDishes = await this.orderDishRepository.findByOrderId(orderId);

    return orderDishes;
  }

  async findByDishId(dishId: number): Promise<OrderDish[]> {
    const orderDishes = await this.orderDishRepository.findByDishId(dishId);

    return orderDishes;
  }

  async create(data: CreateOrderDishDTO): Promise<OrderDish> {
    const orderDish = await this.orderDishRepository.createOrderDish(data);

    return orderDish;
  }

  async update(data: UpdateOrderDishDTO): Promise<OrderDish> {
    const orderDish = await this.orderDishRepository.updateOrderDish(data);

    return orderDish;
  }

  async delete(identifier: OrderDishIdentifierDTO): Promise<void> {
    await this.orderDishRepository.deleteOrderDish(identifier);
  }
}
