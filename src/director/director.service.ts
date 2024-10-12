import { Injectable } from '@nestjs/common';
import { CreateDirectorDto } from './dto/create-director.dto';
import { UpdateDirectorDto } from './dto/update-director.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Director } from './entities/director.entity';
import { Repository } from 'typeorm';
import { sign } from 'jsonwebtoken';
import * as dotenv from 'dotenv';
dotenv.config();

@Injectable()
export class DirectorService {
  constructor(
    @InjectRepository(Director)
    private readonly directorRepository: Repository<Director>,
  ) {}
  async create(createDirectorDto: CreateDirectorDto) {
    try {
      const checkDirector = await this.directorRepository.findOne({
        where: { fullname: createDirectorDto.fullname },
      });

      if (checkDirector) {
        const create = await this.directorRepository.create(createDirectorDto);
        await this.directorRepository.save(create);

        return {
          success: true,
          message: 'Created successfully✅',
        };
      } else {
        return {
          success: false,
          message: 'Director already exists❗',
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
      return await this.directorRepository.find();
    } catch (error) {
      return {
        success: false,
        message: error.message,
      };
    }
  }

  async findOne(id: number) {
    try {
      const check = await this.directorRepository.findOneBy({ id });

      if (check) {
        return {
          success: true,
          data: check,
        };
      } else {
        return {
          success: false,
          message: 'There is no info❗',
        };
      }
    } catch (error) {
      return {
        success: false,
        message: error.message,
      };
    }
  }

  async update(updateDirectorDto: UpdateDirectorDto) {
    try {
      const check = await this.directorRepository.findOneBy({
        id: updateDirectorDto.id,
      });

      if (check) {
        await this.directorRepository.update(
          updateDirectorDto.id,
          updateDirectorDto,
        );

        await this.directorRepository.save(updateDirectorDto);

        return {
          success: true,
          message: 'Updated successfully✅',
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
      const check = await this.directorRepository.findOneBy({ id });

      if (check) {
        await this.directorRepository.delete({ id });

        return {
          success: true,
          message: 'Deleted successfully✅',
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
      const checkDirector = await this.directorRepository.findOneBy({
        username,
      });

      if (checkDirector) {
        if (checkDirector.password === password) {
          const access_token = sign(
            { id: checkDirector.id, role: 'director' },
            process.env.SECRET_KEY,
            { expiresIn: 500 },
          );

          const refresh_token = sign(
            { id: checkDirector.id, role: 'director' },
            process.env.SECRET_KEY,
          );

          return {
            status: 200,
            success: true,
            message: 'Welcome back ' + checkDirector.fullname,
            tokens: {
              access_token,
              refresh_token,
            },
          };
        } else {
          return {
            status: 400,
            success: false,
            message: 'Wrong password',
          };
        }
      } else {
        return {
          status: 404,
          success: false,
          message: 'Wrong username',
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
