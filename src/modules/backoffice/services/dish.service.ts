import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AccountIdentifierDTO } from 'src/shared/dtos/account/account-identifier.dto';
import { CreateDishDTO } from '../dtos/dish/create-dish.dto';
import { DishIdentifierDTO } from '../dtos/dish/dish-identifier.dto';
import { UpdateDishDTO } from '../dtos/dish/update-dish.dto';
import { Dish } from '../entities/dish.entity';
import { DishRepository } from '../repositories/dish/dish.repository';

@Injectable()
export class DishService {
  constructor(
    @InjectRepository(DishRepository)
    private readonly dishRepository: DishRepository,
  ) {}

  async findById(identifier: DishIdentifierDTO): Promise<Dish> {
    const dish = await this.dishRepository.findById(identifier);

    return dish;
  }

  async findAll(identifier: AccountIdentifierDTO): Promise<Dish[]> {
    const dishes = await this.dishRepository.findAll(identifier);

    return dishes;
  }

  async create(data: CreateDishDTO): Promise<Dish> {
    const dish = await this.dishRepository.createDish(data);

    return dish;
  }

  async update(data: UpdateDishDTO): Promise<Dish> {
    const dish = await this.dishRepository.updateDish(data);

    return dish;
  }

  async delete(identifier: DishIdentifierDTO): Promise<void> {
    await this.dishRepository.deleteDish(identifier);
  }
}
