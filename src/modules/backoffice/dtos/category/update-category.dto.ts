import { ApiProperty } from '@nestjs/swagger';

import { IsString, IsNumber, IsOptional } from 'class-validator';

import { AccountIdentifierDTO } from 'src/shared/dtos/account/account-identifier.dto';

export class UpdateCategoryDTO extends AccountIdentifierDTO {
  @ApiProperty({ description: `Category id` })
  @IsNumber()
  id: number;

  @ApiProperty({ description: `Category name` })
  @IsOptional()
  @IsString()
  name: string;
}
