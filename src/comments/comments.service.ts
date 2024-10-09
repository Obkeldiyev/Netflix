import { Injectable } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { Comment } from './entities/comment.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CommentsService {
  constructor(
    @InjectRepository(Comment)
    private readonly commentsRepository: Repository<Comment>,
  ) {}

  async create(createCommentDto: CreateCommentDto) {
    try {
      await this.commentsRepository.create(createCommentDto);
      await this.commentsRepository.save(createCommentDto);

      return {
        success: true,
        message: 'Comment added successfully!',
        status: 200,
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
      return await this.commentsRepository.find();
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
      const comment = await this.commentsRepository.findOneBy({ id });

      if (comment) {
        return {
          success: true,
          data: comment,
          status: 200,
        };
      } else {
        return {
          success: false,
          message: `Cannot find comment with id ${id}`,
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

  async update(id: number, updateCommentDto: UpdateCommentDto) {
    try {
      const checkComment = await this.commentsRepository.findOneBy({ id });

      if (!checkComment) {
        return {
          success: false,
          message: `Cannot find comment with id ${id}`,
          status: 404,
        };
      }

      await this.commentsRepository.update(id, updateCommentDto);
      await this.commentsRepository.save(updateCommentDto);

      return {
        success: true,
        message: 'Comment updated successfully!',
        status: 200,
      };
    } catch (error) {
      return {
        success: false,
        status: 500,
        message: error.message,
      };
    }
  }

  async remove(id: number) {
    try {
      const checkComment = await this.commentsRepository.findOneBy({ id });

      if (!checkComment) {
        return {
          status: 404,
          success: false,
          message: `Cannot find comment with id ${id}`,
        };
      }

      await this.commentsRepository.delete(id);

      return {
        success: true,
        message: 'Comment deleted successfully!',
        status: 200,
      };
    } catch (error) {
      return {
        success: false,
        status: 500,
        message: error.message,
      };
    }
  }
}
