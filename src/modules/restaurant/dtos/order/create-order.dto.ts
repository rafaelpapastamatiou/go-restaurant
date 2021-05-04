import { ApiProperty } from '@nestjs/swagger';

import { IsArray, IsNumber, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';

import { AccountIdentifierDTO } from 'src/shared/dtos/account/account-identifier.dto';
import { OrderDish } from '../../entities/order-dish.entity';

export class CreateOrderDTO extends AccountIdentifierDTO {
  @ApiProperty({ description: `Order seat id` })
  @IsNumber()
  seatId: number;

  @ApiProperty({ description: `Order dishes` })
  @IsOptional()
  @IsArray()
  @Type(() => OrderDish)
  orderDishes?: OrderDish[];
}
