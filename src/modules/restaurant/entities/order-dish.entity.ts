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
import { ApiProperty } from '@nestjs/swagger';

@Entity('order_dishes')
export class OrderDish {
  @ApiProperty({ description: 'OrderDish id' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ description: 'OrderDish quantity' })
  @Column()
  quantity: number;

  @ApiProperty({ description: 'OrderDish note', required: false })
  @Column()
  note?: string;

  @ApiProperty({ description: 'OrderDish created at' })
  @CreateDateColumn()
  createdAt: string;

  @UpdateDateColumn()
  updatedAt: string;

  @ManyToOne(() => Dish, (dish) => dish.orderDishes)
  dish: Dish;

  @ApiProperty({ description: 'OrderDish dish id' })
  @Column({ type: 'int' })
  dishId: number;

  @ApiProperty({ description: 'OrderDish order id' })
  @ManyToOne(() => Order, (order) => order.orderDishes)
  order: Order;
  orderId: number;
}
