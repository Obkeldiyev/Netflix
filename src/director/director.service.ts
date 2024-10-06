import { Injectable } from '@nestjs/common';
import { CreateDirectorDto } from './dto/create-director.dto';
import { UpdateDirectorDto } from './dto/update-director.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Director } from './entities/director.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DirectorService {
  constructor(@InjectRepository(Director) private readonly directorRepository: Repository<Director>){}
  async create(createDirectorDto: CreateDirectorDto) {
    try {
      let checkDirector = await this.directorRepository.findOne({where: {fullname: createDirectorDto.fullname}})

      if(checkDirector) {
        let create = await this.directorRepository.create(createDirectorDto)

        return {
          success: true,
          message: "Created successfully✅"
        }
      }else {
        return {
          success :false,
          message: 'Director already exists❗'
        }
      }
    } catch (error) {
      return {
        success: false,
        message: error.message
      }
    }
  }

  async findAll() {
    try {
      return await this.directorRepository.find()
    } catch (error) {
      return {
        success: false,
        message: error.message
      }
    }
  }

  async findOne(id: number) {
    try {
      let check = await this.directorRepository.findOneBy({id})

      if(check) {
        return {
          success: true,
          data: check
        }
      }else{
        return {
          success: false,
          message: 'There is no info❗'
        }
      }
    } catch (error) {
      return {
        success: false,
        message: error.message
      }
    }
  }

  async update(updateDirectorDto: UpdateDirectorDto) {
    try {
      let check = await this.directorRepository.findOneBy({id: updateDirectorDto.id})

      if(check) {
        let update = await this.directorRepository.update(updateDirectorDto, {id: updateDirectorDto.id})

        return {
          success: true,
          message: 'Updated successfully✅'
        }
      }
    } catch (error) {
      return {
        success: false,
        message: error.message
      }
    }
  }

  async remove(id: number) {
    try {
      let check = await this.directorRepository.findOneBy({id})

      if(check) {
        let Delete = await this.directorRepository.delete({id})

        return {
          success: true,
          message: 'Deleted successfully✅'
        }
      }
    } catch (error) {
      return {
        success: false,
        message: error.message
      }
    }
  }
}
