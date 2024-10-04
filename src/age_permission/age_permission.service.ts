import { Injectable } from '@nestjs/common';
import { CreateAgePermissionDto } from './dto/create-age_permission.dto';
import { UpdateAgePermissionDto } from './dto/update-age_permission.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { AgePermission } from './entities/age_permission.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AgePermissionService {
  constructor(
    @InjectRepository(AgePermission)
    private readonly agePermissionRepository: Repository<AgePermission>,
  ) {}
  async create(createAgePermissionDto: CreateAgePermissionDto) {
    try {
      const check: AgePermission = await this.agePermissionRepository.findOneBy(
        {
          age: createAgePermissionDto.age,
        },
      );

      if (check) {
        return {
          status: 409,
          success: false,
          message: 'This category already exists',
        };
      } else {
        const newCategory = await this.agePermissionRepository.create(
          createAgePermissionDto,
        );
        await this.agePermissionRepository.save(newCategory);

        return {
          status: 202,
          success: true,
          message: 'The age permission created successfully',
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
      return await this.agePermissionRepository.find();
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
      return await this.agePermissionRepository.findOneBy({ id });
    } catch (error) {
      return {
        status: 500,
        success: false,
        message: error.message,
      };
    }
  }

  async update(id: number, updateAgePermissionDto: UpdateAgePermissionDto) {
    try {
      const check: AgePermission = await this.agePermissionRepository.findOneBy(
        {
          id,
        },
      );

      if (check) {
        return {
          status: 409,
          success: false,
          message: 'This age permission already exists',
        };
      } else {
        await this.agePermissionRepository.update(id, updateAgePermissionDto);
        await this.agePermissionRepository.save(updateAgePermissionDto);

        return {
          status: 202,
          success: true,
          message: 'The age permission updated successfully',
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
      const check: AgePermission = await this.agePermissionRepository.findOneBy(
        {
          id,
        },
      );

      if (check) {
        return {
          status: 409,
          success: false,
          message: 'This age permission already exists',
        };
      } else {
        await this.agePermissionRepository.delete(id);

        return {
          status: 202,
          success: true,
          message: 'The age permission deleted successfully',
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
