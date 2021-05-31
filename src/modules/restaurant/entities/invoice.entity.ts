import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

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

  @ManyToOne(() => Account, (account) => account.invoices)
  account: Account;
  accountId: number;

  @ManyToOne(() => User, (user) => user.invoices)
  user: User;
  userId: number;
}
