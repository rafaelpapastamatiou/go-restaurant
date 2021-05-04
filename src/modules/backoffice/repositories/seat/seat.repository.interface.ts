import { AccountIdentifierDTO } from 'src/shared/dtos/account/account-identifier.dto';
import { CreateSeatDTO } from '../../dtos/seat/create-seat.dto';
import { SeatIdentifierDTO } from '../../dtos/seat/seat-identifier.dto';
import { SeatNumberIdentifierDTO } from '../../dtos/seat/seat-number-identifier.dto';
import { UpdateSeatDTO } from '../../dtos/seat/update-seat.dto';
import { Seat } from '../../entities/seat.entity';

export interface SeatRepositoryInterface {
  findById(identifier: SeatIdentifierDTO): Promise<Seat>;
  findAll(identifier: AccountIdentifierDTO): Promise<Seat[]>;
  findByNumber(identifier: SeatNumberIdentifierDTO): Promise<Seat>;
  createSeat(data: CreateSeatDTO): Promise<Seat>;
  updateSeat(data: UpdateSeatDTO): Promise<Seat>;
  deleteSeat(identifier: SeatIdentifierDTO): Promise<void>;
}
