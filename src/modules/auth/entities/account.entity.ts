import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { User } from './user.entity';
import { Category } from 'src/modules/backoffice/entities/category.entity';
import { Dish } from 'src/modules/backoffice/entities/dish.entity';
import { Order } from 'src/modules/restaurant/entities/order.entity';
import { Invoice } from 'src/modules/restaurant/entities/invoice.entity';

@Entity()
export class Account {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  tradeName: string;

  @Column()
  urlName: string;

  @OneToMany(() => User, (user) => user.account)
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
