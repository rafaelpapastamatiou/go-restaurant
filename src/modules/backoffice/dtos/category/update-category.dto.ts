import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, IsOptional } from 'class-validator';
import { Mixin } from 'ts-mixer';

import { AccountIdentifierDTO } from 'src/shared/dtos/account/account-identifier.dto';

export class UpdateCategoryRequestDTO {
  @ApiProperty({ description: `Category id` })
  @IsNumber()
  id: number;

  @ApiProperty({ description: `Category name` })
  @IsOptional()
  @IsString()
  name: string;
}

export class UpdateCategoryDTO extends Mixin(
  UpdateCategoryRequestDTO,
  AccountIdentifierDTO,
) {}
