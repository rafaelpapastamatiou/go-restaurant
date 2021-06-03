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
import { ApiProperty } from '@nestjs/swagger';

@Entity('categories')
export class Category {
  @ApiProperty({ description: 'Category id' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ description: 'Category name' })
  @Column()
  name: string;

  @ApiProperty({ description: 'Category created at' })
  @CreateDateColumn()
  createdAt: string;

  @ApiProperty({ description: 'Category updated at', nullable: true })
  @UpdateDateColumn()
  updatedAt: string;

  @OneToMany(() => Dish, (dish) => dish.category)
  dishes: Dish[];

  @ManyToOne(() => Account, (account) => account.categories)
  account: Account;

  @ApiProperty({ description: 'Category account id' })
  @Column({ type: 'int' })
  accountId: number;
}
