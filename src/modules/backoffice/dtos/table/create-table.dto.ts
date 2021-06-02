import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { Mixin } from 'ts-mixer';

import { AccountIdentifierDTO } from 'src/shared/dtos/account/account-identifier.dto';

export class CreateTableRequestDTO {
  @ApiProperty({ description: `Table number` })
  @IsString()
  number: string;
}
export class CreateTableDTO extends Mixin(
  CreateTableRequestDTO,
  AccountIdentifierDTO,
) {}
