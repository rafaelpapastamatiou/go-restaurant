import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, IsOptional } from 'class-validator';
import { Mixin } from 'ts-mixer';

import { AccountIdentifierDTO } from 'src/shared/dtos/account/account-identifier.dto';

export class UpdateDishRequestDTO {
  @ApiProperty({ description: `Dish id` })
  @IsNumber()
  id: number;

  @ApiProperty({ description: `Dish name` })
  @IsOptional()
  @IsString()
  name?: string;

  @ApiProperty({ description: `Dish price` })
  @IsOptional()
  @IsNumber()
  price?: number;

  @ApiProperty({ description: `Dish category id` })
  @IsOptional()
  @IsNumber()
  categoryId?: number;
}

export class UpdateDishDTO extends Mixin(
  UpdateDishRequestDTO,
  AccountIdentifierDTO,
) {}
