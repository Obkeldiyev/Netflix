import { Injectable } from '@nestjs/common';
import { CreateLikeDto } from './dto/create-like.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Like } from './entities/like.entity';
import { Repository } from 'typeorm';

@Injectable()
export class LikesService {
  constructor(
    @InjectRepository(Like) private readonly likeRepository: Repository<Like>,
  ) {}

  async create(createLikeDto: CreateLikeDto) {
    try {
      const check = await this.likeRepository.findOne({
        where: {
          user_id: createLikeDto.user_id,
          film_id: createLikeDto.film_id,
        },
      });

      if (check) {
        return {
          status: 409,
          success: false,
          message: 'You already liked this video',
        };
      } else {
        const newLike = this.likeRepository.create(createLikeDto);
        await this.likeRepository.save(newLike);

        return {
          status: 210,
          success: true,
          message: 'You liked successfully',
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
      return await this.likeRepository.find();
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
      return await this.likeRepository.findOneBy({ id });
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
      const check = await this.likeRepository.findOneBy({ id });

      if (check) {
        await this.likeRepository.delete(id);

        return {
          status: 201,
          success: true,
          message: 'The like deleted successfully',
        };
      } else {
        return {
          status: 404,
          success: false,
          message: 'No access',
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
