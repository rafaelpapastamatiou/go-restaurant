import { ApiProperty } from '@nestjs/swagger';

import { IsNumber, IsOptional, IsString } from 'class-validator';

import { OrderDishIdentifierDTO } from './order-dish-identifier.dto';

export class UpdateOrderDishDTO extends OrderDishIdentifierDTO {
  @ApiProperty({ description: `Dish quantity` })
  @IsNumber()
  quantity?: number;

  @ApiProperty({ description: `Dish note` })
  @IsOptional()
  @IsString()
  note?: string;
}
