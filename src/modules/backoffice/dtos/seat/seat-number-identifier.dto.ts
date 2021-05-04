import { ApiProperty } from '@nestjs/swagger';

import { IsString } from 'class-validator';

import { AccountIdentifierDTO } from 'src/shared/dtos/account/account-identifier.dto';

export class SeatNumberIdentifierDTO extends AccountIdentifierDTO {
  @ApiProperty({ description: `Seat number` })
  @IsString()
  number: string;
}
