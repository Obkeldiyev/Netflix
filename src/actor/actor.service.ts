import { Injectable } from '@nestjs/common';
import { CreateActorDto } from './dto/create-actor.dto';
import { UpdateActorDto } from './dto/update-actor.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Actor } from './entities/actor.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ActorService {
  constructor(@InjectRepository(Actor) private readonly actorsRepository: Repository<Actor>) {}

  async create(createActorDto: CreateActorDto) {
    try {
      let checkActor = await this.actorsRepository.findOne({where: {fullname: createActorDto.fullname}})

      if(checkActor){
        let actor = await this.actorsRepository.create(createActorDto)

        return {
          success: true,
          message: 'Actor has been created successfully✅'
        }
      }else{
        return {
          success: false,
          message: 'Actor is already exists❗'
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
      return await this.actorsRepository.find()
    } catch (error) {
      return {
        success: false,
        message: error.message
      }
    }
  }

  async findOne(id: number) {
    try {
      let check = await this.actorsRepository.findOneBy({id})

      if(check) {
        return {
          success: true,
          data: check
        }
      }else{
        return {
          success :false,
          message: 'There is no Actor like this❗'
        }
      }
    } catch (error) {
      return {
        success: false,
        message: error.message
      }
    }
  }

  async update(updateActorDto: UpdateActorDto) {
    try {
      let check = await this.actorsRepository.findOneBy({id: updateActorDto.id})

      if(check) {
        let updateActor = await this.actorsRepository.update(updateActorDto, {id: updateActorDto.id})
        
        return {
          success: true,
          message: 'Updated successfully✅'
        }
      }else{
        return{
          success: false,
          message: 'There is no such user❗'
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
      let check = await this.actorsRepository.findOneBy({id})

      if(check) {
        let deleteActor = await this.actorsRepository.delete(id)

        return {
          success: true,
          message: 'Deleted successfully✅'
        }
      }else {
        return {
          success: false,
          message: 'There is no such Actor❗'
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
