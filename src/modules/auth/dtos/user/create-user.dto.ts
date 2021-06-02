import { ApiProperty } from '@nestjs/swagger';

import { IsString, IsBoolean, IsOptional } from 'class-validator';

import { Mixin } from 'ts-mixer';

import { AccountIdentifierDTO } from 'src/shared/dtos/account/account-identifier.dto';

export class CreateUserRequestDTO {
  @ApiProperty({ description: `User name` })
  @IsString()
  name: string;

  @ApiProperty({ description: `User e-mail` })
  @IsString()
  email: string;

  @ApiProperty({ description: `User password` })
  @IsString()
  password: string;

  @ApiProperty({ description: `User is admin` })
  @IsBoolean()
  @IsOptional()
  admin: boolean;
}

export class CreateUserDTO extends Mixin(
  AccountIdentifierDTO,
  CreateUserRequestDTO,
) {}
