import { ApiProperty } from '@nestjs/swagger';

import { IsString } from 'class-validator';

import { AccountIdentifierDTO } from 'src/shared/dtos/account/account-identifier.dto';

export class CreateCategoryDTO extends AccountIdentifierDTO {
  @ApiProperty({ description: `Category name` })
  @IsString()
  name: string;
}
