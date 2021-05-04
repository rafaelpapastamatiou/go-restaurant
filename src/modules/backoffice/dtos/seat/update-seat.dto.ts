import { ApiProperty } from '@nestjs/swagger';

import { IsString, IsNumber, IsOptional } from 'class-validator';

import { AccountIdentifierDTO } from 'src/modules/auth/dtos/auth/account-identifier.dto';

export class UpdateSeatDTO extends AccountIdentifierDTO {
  @ApiProperty({ description: `Seat id` })
  @IsNumber()
  id: number;

  @ApiProperty({ description: `Seat number` })
  @IsOptional()
  @IsString()
  number?: string;
}
