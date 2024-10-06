import { Injectable } from '@nestjs/common';
import { CreateAwardDto } from './dto/create-award.dto';
import { UpdateAwardDto } from './dto/update-award.dto';
import { Award } from './entities/award.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AwardService {
  constructor(@InjectRepository(Award) private readonly awardRepository: Repository<Award>){}
  async create(createAwardDto: CreateAwardDto) {
    try {
      let checkAward = await this.awardRepository.findOne({where: {name: createAwardDto.name}})

      if(checkAward) {
        let createAward = await this.awardRepository.create(createAwardDto)

        return {
          success: true,
          message: 'Award has been created✅'
        }
      }else {
        return {
          success: false,
          message: 'There Award is already exists❗'
        }
      }
    } catch (error) {
      return {
        success: false,
        mesage: error.message
      }
    }
  }

  async findAll() {
    try {
      return await this.awardRepository.find()
    } catch (error) {
      return {
        success: false,
        message: error.message
      }
    }
  }

  async findOne(id: number) {
    try {
      let check = await this.awardRepository.findOneBy({id})

      if(check) {
        return {
          success: true,
          data: check
        }
      }else {
        return {
          success: false,
          message: 'There is no Award like this❗'
        }
      }
    } catch (error) {
      return {
        success: false,
        message: error.message
      }
    }
  }

  async update(updateAwardDto: UpdateAwardDto) {
    try {
      let check = await this.awardRepository.findOneBy({id: updateAwardDto.id})

      if(check) {
        await this.awardRepository.update(updateAwardDto, {id: updateAwardDto.id})

        return {
          success: true,
          message: "Updated successfully✅"
        }
      }else{
        return {
          success: false,
          message: 'There is no Award like this❗'
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
      let check = await this.awardRepository.findOneBy({id})

      if(check) {
        await this.awardRepository.delete({id})

        return {
          success :true,
          message: 'Deleted successfully✅'
        }
      }else {
        return {
          success: false,
          message: 'There is no data to delete❗'
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
