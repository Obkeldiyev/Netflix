import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    try {
      const checkUserUsername = await this.usersRepository.findOneBy({
        username: createUserDto.username,
      });

      if (checkUserUsername) {
        return {
          success: false,
          message: `Username ${createUserDto.username} already in use`,
          status: 409,
        };
      }

      await this.usersRepository.save(createUserDto);

      return {
        success: true,
        message: 'User created successfully!',
        status: 200,
      };
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
      return await this.usersRepository.find();
    } catch (error) {
      return {
        status: 500,
        message: error.message,
        success: false,
      };
    }
  }

  async findOne(id: number) {
    try {
      return await this.usersRepository.findOneBy({ id });
    } catch (error) {
      return {
        success: false,
        status: 500,
        message: error.message,
      };
    }
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    try {
      let checkUser = await this.usersRepository.findOneBy({ id });

      if (!checkUser) {
        return {
          status: 404,
          success: false,
          message: `Cannot find user with id ${id}`,
        };
      }

      if (updateUserDto.username) {
        let checkUserUsername = await this.usersRepository.findOneBy({
          username: updateUserDto.username,
        });

        if (checkUserUsername) {
          return {
            success: false,
            message: `Username ${updateUserDto.username} already in use`,
          };
        }

        await this.usersRepository.update(id, updateUserDto);
        await this.usersRepository.save(updateUserDto);

        return {
          success: true,
          message: 'User updated successfully!',
          status: 200,
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

  async remove(id: number) {
    try {
      const checkUser = await this.usersRepository.findOneBy({ id });

      if (checkUser) {
        await this.usersRepository.delete({ id });

        return {
          success: true,
          message: 'User deleted successfully!',
          status: 200,
        };
      } else {
        return {
          success: false,
          status: 404,
          message: `Cannot find user with id ${id}`,
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
}
