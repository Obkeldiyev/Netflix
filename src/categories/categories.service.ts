import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from './entities/category.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
  ) {}

  async create(createCategoryDto: CreateCategoryDto) {
    try {
      const check: Category = await this.categoryRepository.findOneBy({
        name: createCategoryDto.name,
      });

      if (check) {
        return {
          status: 409,
          success: false,
          message: 'This category already exists',
        };
      } else {
        const newCategory =
          await this.categoryRepository.create(createCategoryDto);
        await this.categoryRepository.save(newCategory);

        return {
          status: 202,
          success: true,
          message: 'The category created successfully',
        };
      }
    } catch (error) {
      return {
        status: 500,
        success: false,
        message: error.message,
      };
    }
  }

  async findAll() {
    try {
      return await this.categoryRepository.find();
    } catch (error) {
      return {
        status: 500,
        success: false,
        message: error.message,
      };
    }
  }

  async findOne(id: number) {
    try {
      return await this.categoryRepository.findOneBy({ id });
    } catch (error) {
      return {
        status: 500,
        success: false,
        message: error.message,
      };
    }
  }

  async update(id: number, updateCategoryDto: UpdateCategoryDto) {
    try {
      const check: Category = await this.categoryRepository.findOneBy({
        id,
      });

      if (check) {
        return {
          status: 409,
          success: false,
          message: 'This category already exists',
        };
      } else {
        await this.categoryRepository.update(id, updateCategoryDto);
        await this.categoryRepository.save(updateCategoryDto);

        return {
          status: 202,
          success: true,
          message: 'The category updated successfully',
        };
      }
    } catch (error) {
      return {
        status: 500,
        success: false,
        message: error.message,
      };
    }
  }

  async remove(id: number) {
    try {
      const check: Category = await this.categoryRepository.findOneBy({
        id,
      });

      if (check) {
        return {
          status: 409,
          success: false,
          message: 'This category already exists',
        };
      } else {
        await this.categoryRepository.delete(id);

        return {
          status: 202,
          success: true,
          message: 'The category deleted successfully',
        };
      }
    } catch (error) {
      return {
        status: 500,
        success: false,
        message: error.message,
      };
    }
  }
}
