import { ApiProperty } from '@nestjs/swagger';

import { IsNumber } from 'class-validator';

import { AccountIdentifierDTO } from 'src/shared/dtos/account/account-identifier.dto';

export class DishIdentifierDTO extends AccountIdentifierDTO {
  @ApiProperty({ description: `Dish id` })
  @IsNumber()
  id: number;
}
