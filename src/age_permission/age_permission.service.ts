import { Injectable } from '@nestjs/common';
import { CreateAgePermissionDto } from './dto/create-age_permission.dto';
import { UpdateAgePermissionDto } from './dto/update-age_permission.dto';

@Injectable()
export class AgePermissionService {
  create(createAgePermissionDto: CreateAgePermissionDto) {
    return 'This action adds a new agePermission';
  }

  findAll() {
    return `This action returns all agePermission`;
  }

  findOne(id: number) {
    return `This action returns a #${id} agePermission`;
  }

  update(id: number, updateAgePermissionDto: UpdateAgePermissionDto) {
    return `This action updates a #${id} agePermission`;
  }

  remove(id: number) {
    return `This action removes a #${id} agePermission`;
  }
}
