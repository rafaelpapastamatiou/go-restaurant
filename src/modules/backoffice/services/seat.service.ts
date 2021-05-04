import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AccountIdentifierDTO } from 'src/shared/dtos/account/account-identifier.dto';
import { CreateSeatDTO } from '../dtos/seat/create-seat.dto';
import { SeatIdentifierDTO } from '../dtos/seat/seat-identifier.dto';
import { UpdateSeatDTO } from '../dtos/seat/update-seat.dto';
import { Seat } from '../entities/seat.entity';
import { SeatRepository } from '../repositories/seat/seat.repository';

@Injectable()
export class SeatService {
  constructor(
    @InjectRepository(SeatRepository)
    private readonly seatRepository: SeatRepository,
  ) {}

  async findById(identifier: SeatIdentifierDTO): Promise<Seat> {
    const dish = await this.seatRepository.findById(identifier);

    return dish;
  }

  async findAll(identifier: AccountIdentifierDTO): Promise<Seat[]> {
    const dishes = await this.seatRepository.findAll(identifier);

    return dishes;
  }

  async create(data: CreateSeatDTO): Promise<Seat> {
    const dish = await this.seatRepository.createSeat(data);

    return dish;
  }

  async update(data: UpdateSeatDTO): Promise<Seat> {
    const dish = await this.seatRepository.updateSeat(data);

    return dish;
  }

  async delete(identifier: SeatIdentifierDTO): Promise<void> {
    await this.seatRepository.deleteSeat(identifier);
  }
}
