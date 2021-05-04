import { HttpException, HttpStatus } from '@nestjs/common';
import { AccountIdentifierDTO } from 'src/shared/dtos/account/account-identifier.dto';
import { UserIdentifierDTO } from 'src/shared/dtos/user/user-identifier.dto';
import { Repository, EntityRepository } from 'typeorm';
import { AuthenticateDTO } from '../../dtos/auth/authenticate.dto';
import { CreateUserDTO } from '../../dtos/user/create-user.dto';
import { UpdateUserDTO } from '../../dtos/user/update-user.dto';
import { UserEmailIdentifierDTO } from '../../dtos/user/user-email-identifier.dto';

import { User } from '../../entities/user.entity';
import { UserRepositoryInterface } from './user.repository.interface';

@EntityRepository(User)
export class UserRepository
  extends Repository<User>
  implements UserRepositoryInterface {
  async findAll({ accountId }: AccountIdentifierDTO): Promise<User[]> {
    const users = await this.find({
      where: { accountId },
    });

    return users;
  }

  async findById({ accountId, userId }: UserIdentifierDTO): Promise<User> {
    const user = await this.findOne({
      where: {
        id: userId,
        accountId,
      },
    });

    return user;
  }

  async findByEmail({
    accountId,
    email,
  }: UserEmailIdentifierDTO): Promise<User> {
    const user = await this.findOne({
      where: {
        email,
        accountId,
      },
      relations: ['account'],
    });

    return user;
  }

  async findWithCredentials({
    email,
    password,
    accountId,
  }: AuthenticateDTO): Promise<User> {
    const user = await this.findByEmail({ email, accountId });

    if (!user) {
      throw new HttpException('Invalid credentials.', HttpStatus.BAD_REQUEST);
    }

    if (!user.comparePassword(password)) {
      throw new HttpException('Invalid credentials.', HttpStatus.BAD_REQUEST);
    }

    return user;
  }

  async createUser({
    accountId,
    email,
    ...values
  }: CreateUserDTO): Promise<User> {
    const userAlreadyExists = await this.findByEmail({ accountId, email });

    if (userAlreadyExists) {
      throw new HttpException(
        'User with same email already exists',
        HttpStatus.BAD_REQUEST,
      );
    }

    const user = this.create({
      accountId,
      email,
      ...values,
    });

    await this.save(user);

    return user;
  }

  async updateUser({
    currentUserId,
    userId,
    accountId,
    oldPassword,
    password,
    email,
    admin,
    ...newValues
  }: UpdateUserDTO): Promise<User> {
    let user = await this.findById({ userId, accountId });

    if (!user) {
      throw new HttpException('User not found', HttpStatus.BAD_REQUEST);
    }

    if (email) {
      const userWithSameEmailAlreadyExists = await this.findByEmail({
        accountId,
        email,
      });

      if (userWithSameEmailAlreadyExists) {
        throw new HttpException(
          'User with same email already exists',
          HttpStatus.BAD_REQUEST,
        );
      }

      user.email = email;
    }

    if (password) {
      if (!oldPassword) {
        throw new HttpException(
          'Enter the old password',
          HttpStatus.BAD_REQUEST,
        );
      }

      if (!user.comparePassword(oldPassword)) {
        throw new HttpException(
          'Old password does not match',
          HttpStatus.BAD_REQUEST,
        );
      }

      user.password = password;
    }

    if (admin) {
      if (!currentUserId) {
        throw new HttpException(
          'Only an admin can promote another user to admin',
          HttpStatus.BAD_REQUEST,
        );
      }

      const currentUser = await this.findById({
        accountId,
        userId: currentUserId,
      });

      if (!currentUser.admin) {
        throw new HttpException(
          'Only an admin can promote another user to admin',
          HttpStatus.BAD_REQUEST,
        );
      }

      user.admin = admin;
    }

    user = Object.assign(user, { ...newValues });

    await this.save(user);

    return user;
  }

  async deleteUser({ accountId, userId }: UserIdentifierDTO): Promise<void> {
    const user = await this.findById({ accountId, userId });

    if (!user) {
      throw new HttpException('User not found', HttpStatus.BAD_REQUEST);
    }

    await this.remove(user);
  }
}
