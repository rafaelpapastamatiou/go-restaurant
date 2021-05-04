import { ApiProperty } from '@nestjs/swagger';

import { IsString } from 'class-validator';

export class CreateAccountDTO {
  @ApiProperty({ description: `Account name` })
  @IsString()
  name: string;

  @ApiProperty({ description: `Account e-mail` })
  @IsString()
  email: string;

  @ApiProperty({ description: `Account admin user password` })
  @IsString()
  password: string;

  @ApiProperty({ description: `Account trade name` })
  @IsString()
  tradeName: string;

  @ApiProperty({ description: `Account name on url prefix` })
  @IsString()
  urlName: string;
}
