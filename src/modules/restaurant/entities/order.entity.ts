import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
  Column,
} from 'typeorm';

import { Account } from 'src/modules/auth/entities/account.entity';
import { Table } from 'src/modules/backoffice/entities/table.entity';
import { OrderDish } from './order-dish.entity';

@Entity('orders')
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  createdAt: string;

  @UpdateDateColumn()
  updatedAt: string;

  @ManyToOne(() => Table, (table) => table.orders)
  table: Table;

  @Column({ type: 'int' })
  tableId: number;

  @ManyToOne(() => Account, (account) => account.orders)
  account: Account;

  @Column({ type: 'int' })
  accountId: number;

  @OneToMany(() => OrderDish, (orderDish) => orderDish.order)
  orderDishes: OrderDish[];
}
