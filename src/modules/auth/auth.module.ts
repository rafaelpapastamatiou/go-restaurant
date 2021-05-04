import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { JwtStrategy } from 'src/shared/strategies/jwt.strategy';

import { Account } from './entities/account.entity';
import { User } from 'src/shared/decorators/user.decorator';
import { AccountService } from './services/account.service';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';
import { AccountRepository } from './repositories/account/account.repository';
import { UserRepository } from './repositories/user/user.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Account,
      AccountRepository,
      User,
      UserRepository,
    ]),
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        secret: configService.get<string>('jwt.secret'),
        signOptions: { expiresIn: '1d' },
      }),
    }),
  ],
  controllers: [],
  exports: [JwtModule, PassportModule, AuthService],
  providers: [JwtStrategy, AccountService, AuthService, UserService],
})
export class AuthModule {}
