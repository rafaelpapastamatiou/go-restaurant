import { ApiProperty } from '@nestjs/swagger';

import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateOrderDishDTO {
  @ApiProperty({ description: `Order id` })
  @IsNumber()
  orderId: number;

  @ApiProperty({ description: `Dish id` })
  @IsNumber()
  dishId: number;

  @ApiProperty({ description: `Dish quantity` })
  @IsNumber()
  quantity: number;

  @ApiProperty({ description: `Dish note` })
  @IsOptional()
  @IsString()
  note?: number;
}
