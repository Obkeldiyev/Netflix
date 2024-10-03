import { Injectable } from '@nestjs/common';
import { CreateCountryDto } from './dto/create-country.dto';
import { UpdateCountryDto } from './dto/update-country.dto';
import { Country } from './entities/country.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CountriesService {
  constructor(
    @InjectRepository(Country)
    private countriesRepository: Repository<Country>,
  ) {}

  create(createCountryDto: CreateCountryDto) {
    return this.countriesRepository.save(createCountryDto);
  }

  findAll() {
    return this.countriesRepository.find();
  }

  findOne(id: number) {
    return this.countriesRepository.findOneBy({id});
  }

  async update(id: number, updateCountryDto: UpdateCountryDto) {
    await this.countriesRepository.update(id, updateCountryDto)
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.countriesRepository.delete(id);
  }
}
