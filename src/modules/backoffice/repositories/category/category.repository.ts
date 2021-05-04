import { HttpException, HttpStatus } from '@nestjs/common';
import { Repository, EntityRepository } from 'typeorm';
import { CategoryIdentifierDTO } from '../../dtos/category/category-identifier.dto';
import { CreateCategoryDTO } from '../../dtos/category/create-category.dto';
import { UpdateCategoryDTO } from '../../dtos/category/update-category.dto';

import { Category } from '../../entities/category.entity';
import { CategoryRepositoryInterface } from './category.repository.interface';

@EntityRepository(Category)
export class CategoryRepository
  extends Repository<Category>
  implements CategoryRepositoryInterface {
  async findByAccountId(accountId: number): Promise<Category[]> {
    const categories = await this.find({
      where: { accountId },
    });

    return categories;
  }

  async findById({ id, accountId }: CategoryIdentifierDTO): Promise<Category> {
    const category = await this.findOne({
      where: {
        id,
        accountId,
      },
    });

    return category;
  }

  async createCategory({
    accountId,
    name,
  }: CreateCategoryDTO): Promise<Category> {
    const category = this.create({
      accountId,
      name,
    });

    await this.save(category);

    return category;
  }

  async updateCategory({
    id,
    accountId,
    ...newValues
  }: UpdateCategoryDTO): Promise<Category> {
    let category = await this.findById({ id, accountId });

    if (!category) {
      throw new HttpException('Category not found', HttpStatus.BAD_REQUEST);
    }

    category = Object.assign(category, { ...newValues });

    await this.save(category);

    return category;
  }

  async deleteCategory({
    id,
    accountId,
  }: CategoryIdentifierDTO): Promise<void> {
    const category = await this.findById({ id, accountId });

    if (!category) {
      throw new HttpException('Category not found', HttpStatus.BAD_REQUEST);
    }

    await this.remove(category);
  }
}
