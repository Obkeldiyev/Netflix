import { Injectable } from '@nestjs/common';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { Admin } from './entities/admin.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AdminsService {
  constructor(
    @InjectRepository(Admin)
    private adminsRepository: Repository<Admin>,
  ) {}


  create(createAdminDto: CreateAdminDto) {
    return this.adminsRepository.save(createAdminDto);
  }

  findAll() {
    return this.adminsRepository.find();
  }

  findOne(id: number) {
    return this.adminsRepository.findOneBy({id});
  }

  async update(id: number, adminData: UpdateAdminDto) {
    await this.adminsRepository.update(id, adminData);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.adminsRepository.delete(id);
  }
}
