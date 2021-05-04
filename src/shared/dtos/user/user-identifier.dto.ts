import { ApiProperty } from '@nestjs/swagger';

import { IsNumber } from 'class-validator';

import { AccountIdentifierDTO } from '../account/account-identifier.dto';

export class UserIdentifierDTO extends AccountIdentifierDTO {
  @ApiProperty({ description: `User id` })
  @IsNumber()
  userId: number;
}
