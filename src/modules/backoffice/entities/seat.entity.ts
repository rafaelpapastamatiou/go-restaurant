import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';

import { Account } from 'src/modules/auth/entities/account.entity';
import { Order } from 'src/modules/restaurant/entities/order.entity';

@Entity()
export class Seat {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  number: string;

  @ManyToOne(() => Account, (account) => account.dishes)
  account: Account;

  @OneToMany(() => Order, (order) => order.seat)
  orders: Order[];
}
