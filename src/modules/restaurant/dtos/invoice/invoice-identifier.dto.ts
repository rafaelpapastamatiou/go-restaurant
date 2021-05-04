import { ApiProperty } from '@nestjs/swagger';

import { IsNumber } from 'class-validator';

import { AccountIdentifierDTO } from 'src/shared/dtos/account/account-identifier.dto';

export class InvoiceIdentifierDTO extends AccountIdentifierDTO {
  @ApiProperty({ description: `Invoice id` })
  @IsNumber()
  id: number;
}
