import { ApiProperty } from '@nestjs/swagger';

import { IsString, IsBoolean } from 'class-validator';

import { AccountIdentifierDTO } from 'src/shared/dtos/account/account-identifier.dto';

export class CreateUserDTO extends AccountIdentifierDTO {
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
  admin: boolean;
}
