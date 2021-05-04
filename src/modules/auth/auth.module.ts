import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { JwtStrategy } from 'src/shared/strategies/jwt.strategy';

import { Account } from './entities/account.entity';
import { User } from 'src/shared/decorators/user.decorator';

@Module({
  imports: [
    TypeOrmModule.forFeature([Account, User]),
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        secret: configService.get<string>('jwt.secret'),
        signOptions: { expiresIn: '1d' },
      }),
    }),
  ],
  exports: [JwtModule, PassportModule],
  providers: [JwtStrategy],
})
export class AuthModule {}
