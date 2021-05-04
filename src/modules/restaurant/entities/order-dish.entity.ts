import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  ManyToMany,
  JoinTable,
} from 'typeorm';

import { Dish } from 'src/modules/backoffice/entities/dish.entity';
import { Order } from './order.entity';

@Entity()
export class OrderDish {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  note: string;

  @ManyToOne(() => Dish, (dish) => dish.orderDishes)
  dish: Dish;

  @ManyToOne(() => Order, (order) => order.orderDishes)
  order: Order;
}
