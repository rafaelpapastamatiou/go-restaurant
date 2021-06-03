import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import * as bcrypt from 'bcrypt';
import { Exclude, Type } from 'class-transformer';

import { Invoice } from 'src/modules/restaurant/entities/invoice.entity';
import { Account } from './account.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity('users')
export class User {
  @ApiProperty({ description: 'User id' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ description: 'User name' })
  @Column()
  name: string;

  @ApiProperty({ description: 'User email' })
  @Column()
  email: string;

  @Column()
  @Exclude()
  password: string;

  @ApiProperty({ description: 'User is admin' })
  @Column({ type: 'boolean', default: 0 })
  admin: boolean;

  @ApiProperty({ description: 'User created at' })
  @CreateDateColumn()
  createdAt: string;

  @ApiProperty({ description: 'User updated at', nullable: true })
  @UpdateDateColumn()
  updatedAt: string;

  @ManyToOne(() => Account, (account) => account.users)
  account: Account;

  @ApiProperty({ description: 'User account id' })
  @Column({ type: 'int' })
  accountId: number;

  @OneToMany(() => Invoice, (invoice) => invoice.user)
  invoices: Invoice[];

  async comparePassword(attempt: string): Promise<boolean> {
    return await bcrypt.compare(attempt, this.password);
  }

  @BeforeUpdate()
  @BeforeInsert()
  async hashPassword() {
    if (this.password) {
      this.password = await bcrypt.hash(this.password, 10);
    }
  }
}
