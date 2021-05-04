import { ApiProperty } from '@nestjs/swagger';

import { IsString } from 'class-validator';

export class AuthenticateDTO {
  @ApiProperty({ description: `User e-mail` })
  @IsString()
  email: string;

  @ApiProperty({ description: `User password` })
  @IsString()
  password: string;
}
