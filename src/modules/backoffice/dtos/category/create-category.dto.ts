import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { Mixin } from 'ts-mixer';

import { AccountIdentifierDTO } from 'src/shared/dtos/account/account-identifier.dto';

export class CreateCategoryRequestDTO {
  @ApiProperty({ description: `Category name` })
  @IsString()
  name: string;
}

export class CreateCategoryDTO extends Mixin(
  CreateCategoryRequestDTO,
  AccountIdentifierDTO,
) {}
