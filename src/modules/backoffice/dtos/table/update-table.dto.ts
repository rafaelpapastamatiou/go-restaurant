import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, IsOptional } from 'class-validator';
import { Mixin } from 'ts-mixer';

import { AccountIdentifierDTO } from 'src/shared/dtos/account/account-identifier.dto';

export class UpdateTableRequestDTO {
  @ApiProperty({ description: `Table number` })
  @IsOptional()
  @IsString()
  number?: string;
}

export class UpdateTableDTO extends Mixin(
  UpdateTableRequestDTO,
  AccountIdentifierDTO,
) {
  @ApiProperty({ description: `Table id` })
  @IsNumber()
  id: number;
}
