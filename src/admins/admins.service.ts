import { Injectable } from '@nestjs/common';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Admin } from './entities/admin.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AdminsService {
  constructor(
    @InjectRepository(Admin)
    private readonly adminsRepository: Repository<Admin>,
  ) {}

  async create(createAdminDto: CreateAdminDto) {
    try {
      const checkAdminUsername = await this.adminsRepository.findOneBy({username: createAdminDto.username});

      if(checkAdminUsername){
        return {
          success: false,
          message: `Username ${createAdminDto.username} already in use`,
          status: 409
        }
      } 

      await this.adminsRepository.create(createAdminDto);
      await this.adminsRepository.save(createAdminDto);

      return {
        success: true,
        message: "Admin added successfully!",
        status: 200
      }
    } catch (error) {
      return {
        status: error.status,
        success: false,
        message: error.message,
      }
    }
  }

  async findAll() {
    try {
      return await this.adminsRepository.find();
    } catch (error) {
      return {
        success: false,
        status: 500,
        message: error.message
      }
    }
  }

  async findOne(id: number) {
    try {
      const checkAdmin = await this.adminsRepository.findOneBy({id});

      if(checkAdmin){
        return {
          success: true,
          data: checkAdmin,
          status: 200
        }
      }  

      return {
        success: false,
        message: `Cannot find admin with id ${id}`,
        status: 404
      }
    } catch (error) {
      return {
        success: false,
        status: 500,
        message: error.message
      }
    }
  }

  async update(id: number, updateAdminDto: UpdateAdminDto) {
    try {
      const checkAdmin = await this.adminsRepository.findOneBy({id});

      if(!checkAdmin){
        return {
          success: false,
          message: `Cannot find admin with id ${id}`,
          status: 404
        }
      }

      if(updateAdminDto.username){
        const checkAdminUsername = await this.adminsRepository.findOneBy({username: updateAdminDto.username});

        if(checkAdminUsername){
          return {
            success: false,
            message: `Username ${updateAdminDto.username} already in use`,
            status: 409
          }
        }
      }

      await this.adminsRepository.update(id, updateAdminDto);
      await this.adminsRepository.save(updateAdminDto);

      return {
        success: true,
        message: "Admin updated successfully!",
        status: 200
      }
    } catch (error) {
      return {
        success: false,
        status: 500,
        message: error.message
      }
    }
  }

  async remove(id: number) {
    try {
      const checkAdmin = await this.adminsRepository.findOneBy({id});

      if(!checkAdmin){
        return {
          success: false,
          message: `Cannot find admin with id ${id}`,
          status: 404
        } 
      }

      await this.adminsRepository.delete(id);

      return {
        success: true,
        message: "Admin deleted successfully!",
        status: 200
      }
    } catch (error) {
      return {
        success: false,
        status: 500,
        message: error.message
      }
    }
  }
}