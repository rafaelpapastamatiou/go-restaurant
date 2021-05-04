import { ApiProperty } from '@nestjs/swagger';

import { IsNumber } from 'class-validator';

export class OrderDishIdentifierDTO {
  @ApiProperty({ description: `Order id` })
  @IsNumber()
  orderId: number;

  @ApiProperty({ description: `Dish id` })
  @IsNumber()
  dishId: number;
}
