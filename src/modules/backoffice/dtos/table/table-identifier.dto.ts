import { ApiProperty } from '@nestjs/swagger';

import { IsNumber } from 'class-validator';

import { AccountIdentifierDTO } from 'src/shared/dtos/account/account-identifier.dto';

export class TableIdentifierDTO extends AccountIdentifierDTO {
  @ApiProperty({ description: `Table id` })
  @IsNumber()
  id: number;
}
