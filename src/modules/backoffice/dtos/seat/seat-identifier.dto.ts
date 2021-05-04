import { ApiProperty } from '@nestjs/swagger';

import { IsNumber } from 'class-validator';

import { AccountIdentifierDTO } from 'src/shared/dtos/account/account-identifier.dto';

export class SeatIdentifierDTO extends AccountIdentifierDTO {
  @ApiProperty({ description: `Seat id` })
  @IsNumber()
  id: number;
}
