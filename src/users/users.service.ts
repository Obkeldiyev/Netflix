import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { sign } from 'jsonwebtoken';
import * as dotenv from 'dotenv';
dotenv.config();

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    try {
      const usernameChek = await this.usersRepository.findOneBy({
        username: createUserDto.username,
      });

      if (usernameChek) {
        return {
          status: 409,
          success: false,
          message: 'This username has been taken',
        };
      } else {
        const newUser = await this.usersRepository.create(createUserDto);
        await this.usersRepository.save(newUser);

        const access_token = sign(
          { id: newUser.id, role: 'user' },
          process.env.SECRET_KEY,
          { expiresIn: 500 },
        );

        const refresh_token = sign(
          { id: newUser.id, role: 'user' },
          process.env.SECRET_KEY,
        );

        return {
          status: 202,
          success: true,
          message: 'Welcome',
          tokens: {
            access_token,
            refresh_token,
          },
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
      const checkUser = await this.usersRepository.findOneBy({ id });

      if (!checkUser) {
        return {
          status: 404,
          success: false,
          message: `Cannot find user with id ${id}`,
        };
      }

      if (updateUserDto.username) {
        const checkUserUsername = await this.usersRepository.findOneBy({
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

  async login(username: string, password: string) {
    try {
      const checkUser = await this.usersRepository.findOneBy({
        username,
      });

      console.log(checkUser);

      if (checkUser) {
        if (checkUser.password === password) {
          const access_token = sign(
            { id: checkUser.id, role: 'user' },
            process.env.SECRET_KEY,
            { expiresIn: 500 },
          );
          const refresh_token = sign(
            { id: checkUser.id, role: 'user' },
            process.env.SECRET_KEY,
          );

          return {
            status: 200,
            success: false,
            message: 'Welcome back',
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
