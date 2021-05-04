import { ApiProperty } from '@nestjs/swagger';

import { IsString } from 'class-validator';

import { AccountIdentifierDTO } from 'src/modules/auth/dtos/auth/account-identifier.dto';

export class CreateCategoryDTO extends AccountIdentifierDTO {
  @ApiProperty({ description: `Category name` })
  @IsString()
  name: string;
}
