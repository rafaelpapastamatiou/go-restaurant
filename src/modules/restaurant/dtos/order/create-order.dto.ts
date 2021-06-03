import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNumber, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { Mixin } from 'ts-mixer';

import { AccountIdentifierDTO } from 'src/shared/dtos/account/account-identifier.dto';
import { CreateOrderDishRequestDTO } from '../orderDish/create-order-dish.dto';

export class CreateOrderRequestDTO {
  @ApiProperty({ description: `Order table id` })
  @IsNumber()
  tableId: number;

  @ApiProperty({
    description: `Order dishes`,
    type: CreateOrderDishRequestDTO,
    isArray: true,
  })
  @IsArray()
  @ValidateNested()
  @Type(() => CreateOrderDishRequestDTO)
  dishes: CreateOrderDishRequestDTO[];
}

export class CreateOrderDTO extends Mixin(
  CreateOrderRequestDTO,
  AccountIdentifierDTO,
) {}

export class CreateOrderEntityDTO extends AccountIdentifierDTO {
  @ApiProperty({ description: `Order table id` })
  @IsNumber()
  tableId: number;
}
