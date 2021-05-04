import { ApiProperty } from '@nestjs/swagger';

import { IsNumber } from 'class-validator';

import { AccountIdentifierDTO } from 'src/shared/dtos/account/account-identifier.dto';

export class CategoryIdentifierDTO extends AccountIdentifierDTO {
  @ApiProperty({ description: `Category id` })
  @IsNumber()
  id: number;
}
