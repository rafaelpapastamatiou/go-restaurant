import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Invoice } from 'src/modules/restaurant/entities/invoice.entity';
import { Account } from './account.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ type: 'boolean', default: 0 })
  admin: boolean;

  @ManyToOne(() => Account, (account) => account.users)
  account: Account;

  @OneToMany(() => Invoice, (invoice) => invoice.user)
  invoices: Invoice[];
}
