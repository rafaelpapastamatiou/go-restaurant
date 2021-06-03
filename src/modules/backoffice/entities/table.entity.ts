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
import { ApiProperty } from '@nestjs/swagger';

@Entity('tables')
export class Table {
  @ApiProperty({ description: 'Table id' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ description: 'Table number' })
  @Column()
  number: string;

  @ApiProperty({ description: 'Table created at' })
  @CreateDateColumn()
  createdAt: string;

  @ApiProperty({ description: 'Table updated at', nullable: true })
  @UpdateDateColumn()
  updatedAt: string;

  @ManyToOne(() => Account, (account) => account.dishes)
  account: Account;

  @Column({ type: 'int' })
  accountId: number;

  @OneToMany(() => Order, (order) => order.table)
  orders: Order[];
}
