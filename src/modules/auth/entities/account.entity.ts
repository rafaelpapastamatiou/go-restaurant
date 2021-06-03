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
import { ApiProperty } from '@nestjs/swagger';

@Entity('accounts')
export class Account {
  @ApiProperty({ description: 'Account id' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ description: 'Account name' })
  @Column()
  name: string;

  @ApiProperty({ description: 'Account trade name' })
  @Column()
  tradeName: string;

  @ApiProperty({ description: 'Account url' })
  @Column()
  accountUrl: string;

  @ApiProperty({ description: 'Account created at' })
  @CreateDateColumn()
  createdAt: string;

  @ApiProperty({ description: 'Account updated at', nullable: true })
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
