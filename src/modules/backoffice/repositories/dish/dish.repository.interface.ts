import { CreateDishDTO } from '../../dtos/dish/create-dish.dto';
import { DishIdentifierDTO } from '../../dtos/dish/dish-identifier.dto';
import { UpdateDishDTO } from '../../dtos/dish/update-dish.dto';
import { Dish } from '../../entities/dish.entity';

export interface DishRepositoryInterface {
  findByAccountId(accountId: number): Promise<Dish[]>;
  findById(identifier: DishIdentifierDTO): Promise<Dish>;
  createDish(data: CreateDishDTO): Promise<Dish>;
  updateDish(data: UpdateDishDTO): Promise<Dish>;
  deleteDish(identifier: DishIdentifierDTO): Promise<void>;
}
