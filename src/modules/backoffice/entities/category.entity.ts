import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

import { Account } from 'src/modules/auth/entities/account.entity';
import { Dish } from './dish.entity';

@Entity('categories')
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @CreateDateColumn()
  createdAt: string;

  @UpdateDateColumn()
  updatedAt: string;

  @OneToMany(() => Dish, (dish) => dish.category)
  dishes: Dish[];

  @ManyToOne(() => Account, (account) => account.categories)
  account: Account;
  accountId: number;
}
