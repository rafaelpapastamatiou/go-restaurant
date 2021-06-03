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
import { ApiProperty } from '@nestjs/swagger';

@Entity('orders')
export class Order {
  @ApiProperty({ description: 'Order id' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ description: 'Order is finished' })
  @Column({ type: 'boolean', default: false })
  finished: boolean;

  @ApiProperty({ description: 'Order created at' })
  @CreateDateColumn()
  createdAt: string;

  @ApiProperty({ description: 'Order updated at', nullable: true })
  @UpdateDateColumn()
  updatedAt: string;

  @ManyToOne(() => Table, (table) => table.orders)
  table: Table;

  @ApiProperty({ description: 'Order table id' })
  @Column({ type: 'int' })
  tableId: number;

  @ManyToOne(() => Account, (account) => account.orders)
  account: Account;

  @ApiProperty({ description: 'Order account id' })
  @Column({ type: 'int' })
  accountId: number;

  @OneToMany(() => OrderDish, (orderDish) => orderDish.order, { cascade: true })
  orderDishes: OrderDish[];
}
