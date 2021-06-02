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
import { Order } from 'src/modules/restaurant/entities/order.entity';

@Entity('tables')
export class Table {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  number: string;

  @CreateDateColumn()
  createdAt: string;

  @UpdateDateColumn()
  updatedAt: string;

  @ManyToOne(() => Account, (account) => account.dishes)
  account: Account;

  @Column({ type: 'int' })
  accountId: number;

  @OneToMany(() => Order, (order) => order.table)
  orders: Order[];
}
