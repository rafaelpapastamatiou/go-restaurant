import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber } from 'class-validator';
import { Mixin } from 'ts-mixer';

import { UserIdentifierDTO } from 'src/shared/dtos/user/user-identifier.dto';

export class CreateInvoiceDTO extends Mixin(UserIdentifierDTO) {
  @ApiProperty({ description: `Order id` })
  @IsNumber()
  orderId: number;

  @ApiProperty({ description: `Invoice value` })
  @IsNumber()
  value: number;

  @ApiProperty({ description: `Invoice client identifier (CPF)` })
  @IsString()
  client: string;
}
