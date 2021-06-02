import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

import { Account } from 'src/modules/auth/entities/account.entity';
import { User } from 'src/modules/auth/entities/user.entity';

@Entity('invoices')
export class Invoice {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  value: number;

  @Column({ type: 'varchar', length: 11 })
  client: string;

  @CreateDateColumn()
  createdAt: string;

  @UpdateDateColumn()
  updatedAt: string;

  @ManyToOne(() => Account, (account) => account.invoices)
  account: Account;

  @Column({ type: 'int' })
  accountId: number;

  @ManyToOne(() => User, (user) => user.invoices)
  user: User;
  userId: number;
}
