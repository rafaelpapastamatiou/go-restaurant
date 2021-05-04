import { ApiProperty } from '@nestjs/swagger';

import { IsString, IsNumber } from 'class-validator';

export class AuthenticateDTO {
  @ApiProperty({ description: `Account url prefix` })
  @IsString()
  accountUrl: string;

  @ApiProperty({ description: `Account id` })
  @IsNumber()
  accountId?: number;

  @ApiProperty({ description: `User e-mail` })
  @IsString()
  email: string;

  @ApiProperty({ description: `User password` })
  @IsString()
  password: string;
}
