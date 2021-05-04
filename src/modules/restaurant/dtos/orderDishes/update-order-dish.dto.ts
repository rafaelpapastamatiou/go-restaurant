import { ApiProperty } from '@nestjs/swagger';

import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateOrderDishDTO {
  @ApiProperty({ description: `Order dish id` })
  @IsNumber()
  id: number;

  @ApiProperty({ description: `Dish quantity` })
  @IsNumber()
  quantity?: number;

  @ApiProperty({ description: `Dish note` })
  @IsOptional()
  @IsString()
  note?: number;
}
