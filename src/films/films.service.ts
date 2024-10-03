import { Injectable } from '@nestjs/common';
import { CreateFilmDto } from './dto/create-film.dto';
import { UpdateFilmDto } from './dto/update-film.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Film } from './entities/film.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FilmsService {
  constructor(
    @InjectRepository(Film) private readonly filmRepository: Repository<Film>,
  ) {}

  async create(createFilmDto: CreateFilmDto) {
    try {
      const check = await this.filmRepository.findOneBy({
        id: createFilmDto.id,
      });

      if (check) {
        return {
          status: 409,
          success: false,
          message: 'This name has been taken please choose another one',
        };
      } else {
        const newFilm = this.filmRepository.create(createFilmDto);
        await this.filmRepository.save(newFilm);

        return {
          status: 202,
          success: true,
          message: 'The film created successfully',
        };
      }
    } catch (error: any) {
      return {
        status: 500,
        success: false,
        message: error.message,
      };
    }
  }

  async findAll() {
    try {
      return await this.filmRepository.find();
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
      return await this.filmRepository.findOneBy({ id });
    } catch (error) {
      return {
        status: 500,
        success: false,
        message: error.message,
      };
    }
  }

  async update(id: number, updateFilmDto: UpdateFilmDto) {
    try {
      const check: Film = await this.filmRepository.findOneBy({ id });

      if (check) {
        await this.filmRepository.update(id, updateFilmDto);
        await this.filmRepository.save(updateFilmDto);

        return {
          status: 201,
          success: true,
          message: 'The Film updated successfully',
        };
      } else {
        return {
          status: 404,
          success: false,
          message: 'This films does not exists',
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
      const check = await this.filmRepository.findOneBy({ id });

      if (check) {
        await this.filmRepository.delete(id);

        return {
          status: 201,
          success: true,
          message: 'The film deleted successfully',
        };
      } else {
        return {
          status: 404,
          success: false,
          message: 'This film does not exists',
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
