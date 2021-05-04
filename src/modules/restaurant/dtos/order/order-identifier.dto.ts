import { ApiProperty } from '@nestjs/swagger';

import { IsNumber } from 'class-validator';

import { AccountIdentifierDTO } from 'src/shared/dtos/account/account-identifier.dto';

export class OrderIdentifierDTO extends AccountIdentifierDTO {
  @ApiProperty({ description: `Order id` })
  @IsNumber()
  id: number;
}
