import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AccountIdentifierDTO } from 'src/shared/dtos/account/account-identifier.dto';
import { CategoryIdentifierDTO } from '../dtos/category/category-identifier.dto';
import { CreateCategoryDTO } from '../dtos/category/create-category.dto';
import { UpdateCategoryDTO } from '../dtos/category/update-category.dto';
import { Category } from '../entities/category.entity';
import { CategoryRepository } from '../repositories/category/category.repository';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(CategoryRepository)
    private readonly categoryRepository: CategoryRepository,
  ) {}

  async findById(identifier: CategoryIdentifierDTO): Promise<Category> {
    const category = await this.categoryRepository.findById(identifier);

    return category;
  }

  async findAll(identifier: AccountIdentifierDTO): Promise<Category[]> {
    const categories = await this.categoryRepository.findAll(identifier);

    return categories;
  }

  async create(data: CreateCategoryDTO): Promise<Category> {
    const category = await this.categoryRepository.createCategory(data);

    return category;
  }

  async update(data: UpdateCategoryDTO): Promise<Category> {
    const category = await this.categoryRepository.updateCategory(data);

    return category;
  }

  async delete(identifier: CategoryIdentifierDTO): Promise<void> {
    await this.categoryRepository.deleteCategory(identifier);
  }
}
