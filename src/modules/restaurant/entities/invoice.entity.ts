import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';

import { Account } from 'src/modules/auth/entities/account.entity';
import { User } from 'src/modules/auth/entities/user.entity';
import { Order } from './order.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity('invoices')
export class Invoice {
  @ApiProperty({ description: 'Invoice id' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ description: 'Invoice value' })
  @Column()
  value: number;

  @ApiProperty({ description: 'Client ssn' })
  @Column({ type: 'varchar', length: 11 })
  client: string;

  @ApiProperty({ description: 'Invoice created at' })
  @CreateDateColumn()
  createdAt: string;

  @UpdateDateColumn()
  updatedAt: string;

  @ManyToOne(() => Account, (account) => account.invoices)
  account: Account;

  @ApiProperty({ description: 'Invoice account id' })
  @Column({ type: 'int' })
  accountId: number;

  @OneToOne(() => Order)
  @JoinColumn()
  order: Order;

  @ApiProperty({ description: 'Invoice order id' })
  @Column({ type: 'int' })
  orderId: number;

  @ManyToOne(() => User, (user) => user.invoices)
  user: User;

  @ApiProperty({ description: 'Invoice user id' })
  @Column({ type: 'int' })
  userId: number;
}
