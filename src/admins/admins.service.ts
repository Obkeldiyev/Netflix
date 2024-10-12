import { Injectable } from '@nestjs/common';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Admin } from './entities/admin.entity';
import { Repository } from 'typeorm';
import * as dotenv from 'dotenv';
import { sign } from 'jsonwebtoken';
dotenv.config();

@Injectable()
export class AdminsService {
  constructor(
    @InjectRepository(Admin)
    private readonly adminsRepository: Repository<Admin>,
  ) {}

  async create(createAdminDto: CreateAdminDto) {
    try {
      const checkAdminUsername = await this.adminsRepository.findOneBy({
        username: createAdminDto.username,
      });

      if (checkAdminUsername) {
        return {
          success: false,
          message: `Username ${createAdminDto.username} already in use`,
          status: 409,
        };
      }

      const newAdmin = await this.adminsRepository.create(createAdminDto);
      await this.adminsRepository.save(newAdmin);

      return {
        success: true,
        message: 'Admin added successfully!',
        status: 200,
      };
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
      return await this.adminsRepository.find();
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
      const checkAdmin = await this.adminsRepository.findOneBy({ id });

      if (checkAdmin) {
        return {
          success: true,
          data: checkAdmin,
          status: 200,
        };
      }

      return {
        success: false,
        message: `Cannot find admin with id ${id}`,
        status: 404,
      };
    } catch (error) {
      return {
        success: false,
        status: 500,
        message: error.message,
      };
    }
  }

  async update(id: number, updateAdminDto: UpdateAdminDto) {
    try {
      const checkAdmin = await this.adminsRepository.findOneBy({ id });

      if (!checkAdmin) {
        return {
          success: false,
          message: `Cannot find admin with id ${id}`,
          status: 404,
        };
      }

      if (updateAdminDto.username) {
        const checkAdminUsername = await this.adminsRepository.findOneBy({
          username: updateAdminDto.username,
        });

        if (checkAdminUsername) {
          return {
            success: false,
            message: `Username ${updateAdminDto.username} already in use`,
            status: 409,
          };
        }
      }

      await this.adminsRepository.update(id, updateAdminDto);
      await this.adminsRepository.save(updateAdminDto);

      return {
        success: true,
        message: 'Admin updated successfully!',
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
      const checkAdmin = await this.adminsRepository.findOneBy({ id });

      if (!checkAdmin) {
        return {
          success: false,
          message: `Cannot find admin with id ${id}`,
          status: 404,
        };
      }

      await this.adminsRepository.delete(id);

      return {
        success: true,
        message: 'Admin deleted successfully!',
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

  async login(username: string, password: string) {
    try {
      const checkAdmin = await this.adminsRepository.findOneBy({ username });

      if (checkAdmin) {
        if (checkAdmin.password === password) {
          const access_token = sign(
            { id: checkAdmin.id, role: 'admin' },
            process.env.SECRET_KEY,
            { expiresIn: 500 },
          );

          const refresh_token = sign(
            { id: checkAdmin.id, role: 'admin' },
            process.env.SECRET_KEY,
          );

          return {
            status: 200,
            success: true,
            message: 'Welcome back ' + checkAdmin.full_name,
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
