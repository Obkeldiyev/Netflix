import { Injectable } from '@nestjs/common';
import { CreateDirectorAwardDto } from './dto/create-director-award.dto';
import { UpdateDirectorAwardDto } from './dto/update-director-award.dto';

@Injectable()
export class DirectorAwardService {
  create(createDirectorAwardDto: CreateDirectorAwardDto) {
    return 'This action adds a new directorAward';
  }

  findAll() {
    return `This action returns all directorAward`;
  }

  findOne(id: number) {
    return `This action returns a #${id} directorAward`;
  }

  update(id: number, updateDirectorAwardDto: UpdateDirectorAwardDto) {
    return `This action updates a #${id} directorAward`;
  }

  remove(id: number) {
    return `This action removes a #${id} directorAward`;
  }
}
