import { AccountIdentifierDTO } from 'src/shared/dtos/account/account-identifier.dto';
import { CategoryIdentifierDTO } from '../../dtos/category/category-identifier.dto';
import { CreateCategoryDTO } from '../../dtos/category/create-category.dto';
import { UpdateCategoryDTO } from '../../dtos/category/update-category.dto';
import { Category } from '../../entities/category.entity';

export interface CategoryRepositoryInterface {
  findAll(identifier: AccountIdentifierDTO): Promise<Category[]>;
  findById(identifier: CategoryIdentifierDTO): Promise<Category>;
  createCategory(data: CreateCategoryDTO): Promise<Category>;
  updateCategory(data: UpdateCategoryDTO): Promise<Category>;
  deleteCategory(identifier: CategoryIdentifierDTO): Promise<void>;
}
