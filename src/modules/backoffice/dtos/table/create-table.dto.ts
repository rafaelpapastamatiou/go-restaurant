import { ApiProperty } from '@nestjs/swagger';

import { IsString } from 'class-validator';

import { AccountIdentifierDTO } from 'src/shared/dtos/account/account-identifier.dto';

export class CreateTableDTO extends AccountIdentifierDTO {
  @ApiProperty({ description: `Table number` })
  @IsString()
  number: string;
}
