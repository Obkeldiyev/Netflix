import { Injectable } from '@nestjs/common';
import { CreateActorDto } from './dto/create-actor.dto';
import { UpdateActorDto } from './dto/update-actor.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Actor } from './entities/actor.entity';
import { Repository } from 'typeorm';
import { sign } from 'jsonwebtoken';
import * as dotenv from 'dotenv';
dotenv.config();

@Injectable()
export class ActorService {
  constructor(
    @InjectRepository(Actor)
    private readonly actorsRepository: Repository<Actor>,
  ) {}

  async create(createActorDto: CreateActorDto) {
    try {
      const checkActor = await this.actorsRepository.findOne({
        where: { fullname: createActorDto.fullname },
      });

      if (checkActor) {
        const actor = await this.actorsRepository.create(createActorDto);

        await this.actorsRepository.save(actor);

        return {
          success: true,
          message: 'Actor has been created successfully✅',
        };
      } else {
        return {
          success: false,
          message: 'Actor is already exists❗',
        };
      }
    } catch (error) {
      return {
        success: false,
        message: error.message,
      };
    }
  }

  async findAll() {
    try {
      return await this.actorsRepository.find();
    } catch (error) {
      return {
        success: false,
        message: error.message,
      };
    }
  }

  async findOne(id: number) {
    try {
      const check = await this.actorsRepository.findOneBy({ id });

      if (check) {
        return {
          success: true,
          data: check,
        };
      } else {
        return {
          success: false,
          message: 'There is no Actor like this❗',
        };
      }
    } catch (error) {
      return {
        success: false,
        message: error.message,
      };
    }
  }

  async update(updateActorDto: UpdateActorDto) {
    try {
      const check = await this.actorsRepository.findOneBy({
        id: updateActorDto.id,
      });

      if (check) {
        await this.actorsRepository.update(updateActorDto.id, updateActorDto);

        return {
          success: true,
          message: 'Updated successfully✅',
        };
      } else {
        return {
          success: false,
          message: 'There is no such user❗',
        };
      }
    } catch (error) {
      return {
        success: false,
        message: error.message,
      };
    }
  }

  async remove(id: number) {
    try {
      const check = await this.actorsRepository.findOneBy({ id });

      if (check) {
        await this.actorsRepository.delete(id);

        return {
          success: true,
          message: 'Deleted successfully✅',
        };
      } else {
        return {
          success: false,
          message: 'There is no such Actor❗',
        };
      }
    } catch (error) {
      return {
        success: false,
        message: error.message,
      };
    }
  }

  async login(username: string, password: string) {
    try {
      const checkActor = await this.actorsRepository.findOneBy({ username });

      if (checkActor) {
        if (checkActor.password === password) {
          const access_token = sign(
            { id: checkActor.id, role: 'actor' },
            process.env.SECRET_KEY,
            { expiresIn: 500 },
          );

          const refresh_token = sign(
            { id: checkActor.id, role: 'actor' },
            process.env.SECRET_KEY,
          );

          return {
            status: 200,
            success: true,
            message: 'Welcome back ' + checkActor.fullname,
            tokens: {
              access_token,
              refresh_token,
            },
          };
        } else {
          return {
            status: 400,
            success: false,
            message: 'wrong password',
          };
        }
      } else {
        return {
          status: 404,
          success: false,
          message: 'You are not exists',
        };
      }
    } catch (error) {
      return {
        status: error.status,
        success: false,
        message: error.message,
      };
    }
  }
}
