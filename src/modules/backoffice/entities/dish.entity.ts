import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

import { Account } from 'src/modules/auth/entities/account.entity';
import { Category } from './category.entity';
import { OrderDish } from 'src/modules/restaurant/entities/order-dish.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity('dishes')
export class Dish {
  @ApiProperty({ description: 'Dish id' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ description: 'Dish name' })
  @Column()
  name: string;

  @ApiProperty({ description: 'Dish price' })
  @Column()
  price: number;

  @ApiProperty({
    description: 'Dish image url',
    nullable: true,
    required: false,
  })
  @Column({ nullable: true, default: null })
  imageUrl?: string;

  @ApiProperty({
    description: 'Dish created at',
  })
  @CreateDateColumn()
  createdAt: string;

  @ApiProperty({
    description: 'Dish updated at',
    nullable: true,
  })
  @UpdateDateColumn()
  updatedAt: string;

  @ManyToOne(() => Category, (category) => category.dishes)
  category: Category;

  @ApiProperty({ description: 'Dish category id' })
  @Column({ type: 'int' })
  categoryId: number;

  @ManyToOne(() => Account, (account) => account.dishes)
  account: Account;

  @ApiProperty({ description: 'Dish account id' })
  @Column({ type: 'int' })
  accountId: number;

  @OneToMany(() => OrderDish, (orderDish) => orderDish.dish)
  orderDishes: OrderDish[];
}
