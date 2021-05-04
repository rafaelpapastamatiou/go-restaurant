import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

import { Dish } from 'src/modules/backoffice/entities/dish.entity';
import { Order } from './order.entity';

@Entity()
export class OrderDish {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  quantity: number;

  @Column()
  note?: string;

  @ManyToOne(() => Dish, (dish) => dish.orderDishes)
  dish: Dish;
  dishId: number;

  @ManyToOne(() => Order, (order) => order.orderDishes)
  order: Order;
  orderId: number;
}
