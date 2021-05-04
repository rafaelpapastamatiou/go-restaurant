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

  async findByAccountUrl(urlName: string): Promise<Account | undefined> {
    const account = await this.findOne({
      where: {
        urlName,
      },
    });

    return account;
  }

  async createAccount({
    email,
    password,
    urlName,
    ...values
  }: CreateAccountDTO): Promise<Account> {
    const accountWithSameUrlAlreadyExists = await this.findByAccountUrl(
      urlName,
    );

    if (accountWithSameUrlAlreadyExists) {
      throw new HttpException(
        'Account with same url already exists',
        HttpStatus.BAD_REQUEST,
      );
    }

    const account = this.create({
      urlName,
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
    urlName,
    ...newValues
  }: UpdateAccountDTO): Promise<Account> {
    let account = await this.findById(accountId);

    if (!account) {
      throw new HttpException('Account not found', HttpStatus.BAD_REQUEST);
    }

    if (urlName) {
      const accountWithSameUrlAlreadyExists = await this.findByAccountUrl(
        urlName,
      );

      if (accountWithSameUrlAlreadyExists) {
        throw new HttpException(
          'Account with same url already exists',
          HttpStatus.BAD_REQUEST,
        );
      }

      account.urlName = urlName;
    }

    account = Object.assign(account, { ...newValues });

    await this.save(account);

    return account;
  }
}
