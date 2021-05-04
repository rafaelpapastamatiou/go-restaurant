import { HttpException, HttpStatus } from '@nestjs/common';
import { AccountIdentifierDTO } from 'src/shared/dtos/account/account-identifier.dto';
import { Repository, EntityRepository } from 'typeorm';
import { CreateDishDTO } from '../../dtos/dish/create-dish.dto';
import { DishIdentifierDTO } from '../../dtos/dish/dish-identifier.dto';
import { UpdateDishDTO } from '../../dtos/dish/update-dish.dto';

import { Dish } from '../../entities/dish.entity';
import { DishRepositoryInterface } from './dish.repository.interface';

@EntityRepository(Dish)
export class DishRepository
  extends Repository<Dish>
  implements DishRepositoryInterface {
  async findById({ id, accountId }: DishIdentifierDTO): Promise<Dish> {
    const dish = await this.findOne({
      where: {
        id,
        accountId,
      },
    });

    return dish;
  }

  async findAll({ accountId }: AccountIdentifierDTO): Promise<Dish[]> {
    const dishes = await this.find({
      where: {
        accountId,
      },
    });

    return dishes;
  }

  async createDish({
    accountId,
    name,
    price,
    categoryId,
  }: CreateDishDTO): Promise<Dish> {
    const dish = this.create({
      accountId,
      name,
      price,
      categoryId,
    });

    await this.save(dish);

    return dish;
  }

  async updateDish({
    id,
    accountId,
    ...newValues
  }: UpdateDishDTO): Promise<Dish> {
    let dish = await this.findById({ id, accountId });

    if (!dish) {
      throw new HttpException('Dish not found', HttpStatus.BAD_REQUEST);
    }

    dish = Object.assign(dish, { ...newValues });

    await this.save(dish);

    return dish;
  }

  async deleteDish({ id, accountId }: DishIdentifierDTO): Promise<void> {
    const dish = await this.findById({ id, accountId });

    if (!dish) {
      throw new HttpException('Dish not found', HttpStatus.BAD_REQUEST);
    }

    await this.remove(dish);
  }
}
