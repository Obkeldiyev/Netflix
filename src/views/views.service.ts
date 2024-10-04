import { Injectable } from '@nestjs/common';
import { CreateViewDto } from './dto/create-view.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { View } from './entities/view.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ViewsService {
  constructor(
    @InjectRepository(View) private readonly viewRepository: Repository<View>,
  ) {}
  async create(createViewDto: CreateViewDto) {
    try {
      const newView = await this.viewRepository.create(createViewDto);
      await this.viewRepository.save(newView);

      return {
        status: 202,
        success: true,
        message: 'View created successfully',
      };
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
      return await this.viewRepository.find();
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
      return await this.viewRepository.findOneBy({ id });
    } catch (error) {
      return {
        status: 500,
        success: false,
        message: error.message,
      };
    }
  }
}
