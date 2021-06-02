import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { JwtService } from '@nestjs/jwt';
import { classToClass } from 'class-transformer';

import { JwtPayload } from 'src/shared/interfaces/jwt-payload.interface';

import { AuthenticateDTO } from '../dtos/auth/authenticate.dto';
import { AccountRepository } from '../repositories/account/account.repository';
import { UserRepository } from '../repositories/user/user.repository';
import { User } from '../entities/user.entity';
import { UserIdentifierDTO } from 'src/shared/dtos/user/user-identifier.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(AccountRepository)
    private readonly accountRepository: AccountRepository,
    @InjectRepository(UserRepository)
    private readonly userRepository: UserRepository,
    private jwtService: JwtService,
  ) {}

  async authenticate({ accountUrl, email, password }: AuthenticateDTO) {
    const account = await this.accountRepository.findByAccountUrl(accountUrl);

    if (!account) {
      throw new HttpException('Account not found', HttpStatus.BAD_REQUEST);
    }

    const user = await this.userRepository.findWithCredentials({
      email,
      password,
      accountUrl,
      accountId: account.id,
    });

    return user;
  }

  async generateToken(user: User) {
    const payload: JwtPayload = {
      id: user.id,
      name: user.name,
      email: user.email,
      account: user.account,
      admin: user.admin,
    };

    return {
      token: this.jwtService.sign(payload),
      user: classToClass(user),
    };
  }

  async checkIfAdmin({ userId, accountId }: UserIdentifierDTO) {
    const user = await this.userRepository.findOne({
      where: {
        id: userId,
        accountId,
        admin: true,
      },
    });

    return !!user;
  }
}
