import { Injectable } from '@nestjs/common';
import { CreateDislikeDto } from './dto/create-dislike.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Dislike } from './entities/dislike.entity';

@Injectable()
export class DislikeService {
  likeRepository: any;
  constructor(
    @InjectRepository(Dislike)
    private readonly dislikeRepository: Repository<Dislike>,
  ) {}

  async create(CreateDislikeDto: CreateDislikeDto) {
    try {
      const check = await this.dislikeRepository.findOne({
        where: {
          user_id: CreateDislikeDto.user_id,
          film_id: CreateDislikeDto.film_id,
        },
      });

      if (check) {
        return {
          status: 409,
          success: false,
          message: 'You already disliked this video',
        };
      } else {
        const newLike = this.dislikeRepository.create(CreateDislikeDto);
        await this.dislikeRepository.save(newLike);

        return {
          status: 210,
          success: true,
          message: 'You disliked successfully',
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
      return await this.dislikeRepository.find();
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
      return await this.dislikeRepository.findOneBy({ id });
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
      const check = await this.dislikeRepository.findOneBy({ id });

      if (check) {
        await this.dislikeRepository.delete(id);

        return {
          status: 201,
          success: true,
          message: 'The dislike deleted successfully',
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
