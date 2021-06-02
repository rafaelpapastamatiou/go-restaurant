import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, IsOptional } from 'class-validator';
import { Mixin } from 'ts-mixer';

import { AccountIdentifierDTO } from 'src/shared/dtos/account/account-identifier.dto';

export class CreateDishRequestDTO {
  @ApiProperty({ description: `Dish name` })
  @IsString()
  name: string;

  @ApiProperty({ description: `Dish image url` })
  @IsString()
  @IsOptional()
  imageUrl?: string;

  @ApiProperty({ description: `Dish price` })
  @IsNumber()
  price: number;

  @ApiProperty({ description: `Dish category id` })
  @IsNumber()
  categoryId: number;
}

export class CreateDishDTO extends Mixin(
  CreateDishRequestDTO,
  AccountIdentifierDTO,
) {}
