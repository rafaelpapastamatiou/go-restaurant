import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { User } from './user.entity';
import { Category } from 'src/modules/backoffice/entities/category.entity';
import { Dish } from 'src/modules/backoffice/entities/dish.entity';
import { Order } from 'src/modules/restaurant/entities/order.entity';
import { Invoice } from 'src/modules/restaurant/entities/invoice.entity';

@Entity('accounts')
export class Account {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  tradeName: string;

  @Column()
  accountUrl: string;

  @CreateDateColumn()
  createdAt: string;

  @UpdateDateColumn()
  updatedAt: string;

  @OneToMany(() => User, (user) => user.account, { cascade: true })
  users: User[];

  @OneToMany(() => Category, (category) => category.account)
  categories: Category[];

  @OneToMany(() => Dish, (dish) => dish.account)
  dishes: Dish[];

  @OneToMany(() => Order, (order) => order.account)
  orders: Order[];

  @OneToMany(() => Invoice, (invoice) => invoice.account)
  invoices: Invoice[];
}
