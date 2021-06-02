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

@Entity('dishes')
export class Dish {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  price: number;

  @Column({ nullable: true, default: null })
  imgUrl: string;

  @CreateDateColumn()
  createdAt: string;

  @UpdateDateColumn()
  updatedAt: string;

  @ManyToOne(() => Category, (category) => category.dishes)
  category: Category;

  @Column({ type: 'int' })
  categoryId: number;

  @ManyToOne(() => Account, (account) => account.dishes)
  account: Account;

  @Column({ type: 'int' })
  accountId: number;

  @OneToMany(() => OrderDish, (orderDish) => orderDish.dish)
  orderDishes: OrderDish[];
}
