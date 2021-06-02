import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

import { Dish } from 'src/modules/backoffice/entities/dish.entity';
import { Order } from './order.entity';

@Entity('order_dishes')
export class OrderDish {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  quantity: number;

  @Column()
  note?: string;

  @CreateDateColumn()
  createdAt: string;

  @UpdateDateColumn()
  updatedAt: string;

  @ManyToOne(() => Dish, (dish) => dish.orderDishes)
  dish: Dish;

  @Column({ type: 'int' })
  dishId: number;

  @ManyToOne(() => Order, (order) => order.orderDishes)
  order: Order;
  orderId: number;
}
