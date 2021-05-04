import { AccountIdentifierDTO } from 'src/shared/dtos/account/account-identifier.dto';
import { CreateDishDTO } from '../../dtos/dish/create-dish.dto';
import { DishIdentifierDTO } from '../../dtos/dish/dish-identifier.dto';
import { UpdateDishDTO } from '../../dtos/dish/update-dish.dto';
import { Dish } from '../../entities/dish.entity';

export interface DishRepositoryInterface {
  findAll(identifier: AccountIdentifierDTO): Promise<Dish[]>;
  findById(identifier: DishIdentifierDTO): Promise<Dish>;
  createDish(data: CreateDishDTO): Promise<Dish>;
  updateDish(data: UpdateDishDTO): Promise<Dish>;
  deleteDish(identifier: DishIdentifierDTO): Promise<void>;
}
