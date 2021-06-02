import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AccountIdentifierDTO } from 'src/shared/dtos/account/account-identifier.dto';

import { UserIdentifierDTO } from 'src/shared/dtos/user/user-identifier.dto';
import { CreateUserDTO } from '../dtos/user/create-user.dto';
import { UpdateUserDTO } from '../dtos/user/update-user.dto';
import { User } from '../entities/user.entity';

import { UserRepository } from '../repositories/user/user.repository';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserRepository)
    private readonly userRepository: UserRepository,
  ) {}

  async findByAccount(identifier: AccountIdentifierDTO): Promise<User[]> {
    const users = await this.userRepository.findAll(identifier);

    return users;
  }

  async findById(identifier: UserIdentifierDTO): Promise<User> {
    const user = await this.userRepository.findById(identifier);

    return user;
  }

  async create(data: CreateUserDTO): Promise<User> {
    const user = await this.userRepository.createUser(data);

    return user;
  }

  async update(data: UpdateUserDTO): Promise<User> {
    const user = await this.userRepository.updateUser(data);

    return user;
  }

  async delete(identifier: UserIdentifierDTO): Promise<void> {
    await this.userRepository.deleteUser(identifier);
  }
}
