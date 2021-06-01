import { ApiProperty } from '@nestjs/swagger';

import { IsString, IsNumber, IsOptional } from 'class-validator';

import { AccountIdentifierDTO } from 'src/shared/dtos/account/account-identifier.dto';

export class UpdateTableDTO extends AccountIdentifierDTO {
  @ApiProperty({ description: `Table id` })
  @IsNumber()
  id: number;

  @ApiProperty({ description: `Table number` })
  @IsOptional()
  @IsString()
  number?: string;
}
