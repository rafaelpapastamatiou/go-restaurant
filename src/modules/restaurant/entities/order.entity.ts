import { Entity, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';

import { Account } from 'src/modules/auth/entities/account.entity';
import { Seat } from 'src/modules/backoffice/entities/seat.entity';
import { OrderDish } from './order-dish.entity';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Seat, (seat) => seat.orders)
  seat: Seat;

  @ManyToOne(() => Account, (account) => account.orders)
  account: Account;

  @OneToMany(() => OrderDish, (orderDish) => orderDish.order)
  orderDishes: OrderDish[];
}
