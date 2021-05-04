import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
} from 'typeorm';

import { Account } from 'src/modules/auth/entities/account.entity';
import { Dish } from './dish.entity';

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Dish, (dish) => dish.category)
  dishes: Dish[];

  @ManyToOne(() => Account, (account) => account.categories)
  account: Account;
}
