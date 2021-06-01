import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Account } from '../entities/account.entity';

import { CreateAccountDTO } from '../dtos/account/create-account.dto';

import { AccountRepository } from '../repositories/account/account.repository';
import { UpdateAccountDTO } from '../dtos/account/update-account.dto';

@Injectable()
export class AccountService {
  constructor(
    @InjectRepository(AccountRepository)
    private readonly accountRepository: AccountRepository,
  ) {}

  async findById(id: number): Promise<Account> {
    const account = await this.accountRepository.findById(id);

    return account;
  }

  async findByAccountUrl(accountUrl: string): Promise<Account> {
    const account = await this.accountRepository.findByAccountUrl(accountUrl);

    return account;
  }

  async create(data: CreateAccountDTO): Promise<Account> {
    const account = await this.accountRepository.createAccount(data);

    return account;
  }

  async update(data: UpdateAccountDTO): Promise<Account> {
    const account = await this.accountRepository.updateAccount(data);

    return account;
  }
}
