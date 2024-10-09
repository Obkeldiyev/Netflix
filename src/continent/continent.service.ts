import { Injectable } from '@nestjs/common';
import { CreateContinentDto } from './dto/create-continent.dto';
import { UpdateContinentDto } from './dto/update-continent.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Continent } from './entities/continent.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ContinentService {
  constructor(
    @InjectRepository(Continent)
    private readonly continentsRepository: Repository<Continent>,
  ) {}

  async create(createContinentDto: CreateContinentDto) {
    try {
      const checkDuplicate = await this.continentsRepository.findOneBy({
        name: createContinentDto.name,
      });

      if (checkDuplicate) {
        return {
          success: false,
          message: `Continent ${createContinentDto.name} already exists`,
          status: 409,
        };
      }

      const createdContinent =
        await this.continentsRepository.create(createContinentDto);
      await this.continentsRepository.save(createdContinent);

      return {
        success: true,
        message: 'Continent created successfully!',
        status: 201,
      };
    } catch (error) {
      return {
        success: false,
        status: 500,
        message: error.message,
      };
    }
  }

  async findAll() {
    try {
      return await this.continentsRepository.find();
    } catch (error) {
      return {
        success: false,
        status: 500,
        message: error.message,
      };
    }
  }

  async findOne(id: number) {
    try {
      const checkContinent = await this.continentsRepository.findOneBy({ id });

      if (checkContinent) {
        return {
          success: true,
          data: checkContinent,
          status: 200,
        };
      } else {
        return {
          success: false,
          message: `Cannot find continent with id ${id}`,
          status: 404,
        };
      }
    } catch (error) {
      return {
        success: false,
        status: 500,
        message: error.message,
      };
    }
  }

  async update(id: number, updateContinentDto: UpdateContinentDto) {
    const checkContinent = await this.continentsRepository.findOneBy({ id });

    if (!checkContinent) {
      return {
        success: false,
        message: `Cannot find continent with id ${id}`,
        status: 404,
      };
    }

    if(updateContinentDto.name){
      const checkContinentName = await this.continentsRepository.findOneBy({name: updateContinentDto.name});

      if(checkContinentName){
        return {
          success: false,
          message: `Continent ${name} already exists`,
          status: 409
        }
      }
    }

    await this.continentsRepository.update(id, updateContinentDto);
    await this.continentsRepository.save(updateContinentDto);

    return {
      success: true,
      message: "Continent updated successfully!",
      status: 200
    }
  }

  async remove(id: number) {
    try {
      const checkContinent = await this.continentsRepository.findOneBy({id});

      if(!checkContinent){
        return {
          success: false,
          message: `Cannot find continent with id ${id}`,
          status: 404
        }
      }

      await this.continentsRepository.delete(id);

      return {
        success: true,
        message: "Continent deleted successfully!",
        status: 200
      }
    } catch (error) {
      return {
        success: false,
        status: 500,
        message: error.message
      }
    }
  }
}
