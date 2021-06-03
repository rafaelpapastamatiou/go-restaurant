import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateOrderDishRequestDTO {
  @ApiProperty({ description: `Dish id` })
  @IsNumber()
  dishId: number;

  @ApiProperty({ description: `Dish quantity` })
  @IsNumber()
  quantity: number;

  @ApiProperty({ description: `Note`, required: false })
  @IsString()
  @IsOptional()
  note?: string;
}
