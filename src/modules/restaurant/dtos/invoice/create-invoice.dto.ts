import { ApiProperty } from '@nestjs/swagger';

import { IsString, IsNumber } from 'class-validator';

import { UserIdentifierDTO } from 'src/modules/auth/dtos/auth/user-identifier.dto';

export class CreateInvoiceDTO extends UserIdentifierDTO {
  @ApiProperty({ description: `Invoice value` })
  @IsNumber()
  value: number;

  @ApiProperty({ description: `Invoice client identifier (CPF)` })
  @IsString()
  client: string;
}
