import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
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

  @ManyToOne(() => Category, (category) => category.dishes)
  category: Category;
  categoryId: number;

  @ManyToOne(() => Account, (account) => account.dishes)
  account: Account;
  accountId: number;

  @OneToMany(() => OrderDish, (orderDish) => orderDish.dish)
  orderDishes: OrderDish[];
}
