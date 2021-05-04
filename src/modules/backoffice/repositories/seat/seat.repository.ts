import { HttpException, HttpStatus } from '@nestjs/common';
import { Repository, EntityRepository } from 'typeorm';
import { CreateSeatDTO } from '../../dtos/seat/create-seat.dto';
import { SeatIdentifierDTO } from '../../dtos/seat/seat-identifier.dto';
import { SeatNumberIdentifierDTO } from '../../dtos/seat/seat-number-identifier.dto';
import { UpdateSeatDTO } from '../../dtos/seat/update-seat.dto';

import { Seat } from '../../entities/seat.entity';
import { SeatRepositoryInterface } from './seat.repository.interface';

@EntityRepository(Seat)
export class SeatRepository
  extends Repository<Seat>
  implements SeatRepositoryInterface {
  async findByAccountId(accountId: number): Promise<Seat[]> {
    const seats = await this.find({
      where: { accountId },
    });

    return seats;
  }

  async findById({ id, accountId }: SeatIdentifierDTO): Promise<Seat> {
    const seat = await this.findOne({
      where: {
        id,
        accountId,
      },
    });

    return seat;
  }

  async findByNumber({
    accountId,
    number,
  }: SeatNumberIdentifierDTO): Promise<Seat> {
    const seat = await this.findOne({
      where: { accountId, number },
    });

    return seat;
  }

  async createSeat({ accountId, number }: CreateSeatDTO): Promise<Seat> {
    const seatAlreadyExists = await this.findByNumber({
      accountId,
      number,
    });

    if (seatAlreadyExists) {
      throw new HttpException(
        'Seat with same number already exists',
        HttpStatus.BAD_REQUEST,
      );
    }

    const seat = this.create({
      accountId,
      number,
    });

    await this.save(seat);

    return seat;
  }

  async updateSeat({
    accountId,
    id,
    ...newValues
  }: UpdateSeatDTO): Promise<Seat> {
    let seat = await this.findById({ accountId, id });

    if (!seat) {
      throw new HttpException('Seat not found', HttpStatus.BAD_REQUEST);
    }

    seat = Object.assign(seat, { ...newValues });

    await this.save(seat);

    return seat;
  }

  async deleteSeat({ id, accountId }: SeatIdentifierDTO): Promise<void> {
    const seat = await this.findById({ accountId, id });

    if (!seat) {
      throw new HttpException('Seat not found', HttpStatus.BAD_REQUEST);
    }

    await this.remove(seat);
  }
}
