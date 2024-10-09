import { Injectable } from '@nestjs/common';
import { CreateContinentDto } from './dto/create-continent.dto';
import { UpdateContinentDto } from './dto/update-continent.dto';
import { Repository } from 'typeorm';
import { Continent } from './entities/continent.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ContinentsService {
  constructor(
    @InjectRepository(Continent)
    private continentsRepository: Repository<Continent>,
  ) {}

  create(createContinentDto: CreateContinentDto) {
    return this.continentsRepository.save(createContinentDto);
  }

  findAll() {
    return this.continentsRepository.find();
  }

  findOne(id: number) {
    return this.continentsRepository.findOneBy({id});
  }

  async update(id: number, updateContinentDto: UpdateContinentDto) {
    await this.continentsRepository.update(id, updateContinentDto)
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.continentsRepository.delete(id);
  }
}
