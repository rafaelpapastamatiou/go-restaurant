import { ApiProperty } from '@nestjs/swagger';

import { IsString, IsNumber } from 'class-validator';

import { AccountIdentifierDTO } from 'src/modules/auth/dtos/auth/account-identifier.dto';

export class CreateDishDTO extends AccountIdentifierDTO {
  @ApiProperty({ description: `Dish name` })
  @IsString()
  name: string;

  @ApiProperty({ description: `Dish price` })
  @IsNumber()
  price: number;

  @ApiProperty({ description: `Dish category id` })
  @IsNumber()
  categoryId: number;
}
