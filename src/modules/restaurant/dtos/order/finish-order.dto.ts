import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class FinishOrderRequestDTO {
  @ApiProperty({ description: `Client ssn (Social Security Number)` })
  @IsNumber()
  client: string;
}
