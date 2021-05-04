import { HttpException, HttpStatus } from '@nestjs/common';
import { Repository, EntityRepository } from 'typeorm';
import { CreateAccountDTO } from '../../dtos/account/create-account.dto';
import { UpdateAccountDTO } from '../../dtos/account/update-account.dto';

import { Account } from '../../entities/account.entity';
import { AccountRepositoryInterface } from './account.repository.interface';

@EntityRepository(Account)
export class AccountRepository
  extends Repository<Account>
  implements AccountRepositoryInterface {
  async findById(id: number): Promise<Account> {
    const account = await this.findOne({
      where: { id },
    });

    return account;
  }

  async createAccount({
    email,
    password,
    ...values
  }: CreateAccountDTO): Promise<Account> {
    const account = this.create({
      ...values,
      users: [
        {
          name: 'Admin',
          email,
          password,
          admin: true,
        },
      ],
    });

    await this.save(account);

    return account;
  }

  async updateAccount({
    accountId,
    ...newValues
  }: UpdateAccountDTO): Promise<Account> {
    let account = await this.findById(accountId);

    if (!account) {
      throw new HttpException('Account not found', HttpStatus.BAD_REQUEST);
    }

    account = Object.assign(account, { ...newValues });

    await this.save(account);

    return account;
  }
}
