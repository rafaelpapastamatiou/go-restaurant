import { ApiProperty } from '@nestjs/swagger';

import { IsNumber } from 'class-validator';

export class AccountIdentifierDTO {
  @ApiProperty({ description: `Account id` })
  @IsNumber()
  accountId: number;
}
