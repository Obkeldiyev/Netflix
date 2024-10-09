import { Injectable } from '@nestjs/common';
import { CreateCountryDto } from './dto/create-country.dto';
import { UpdateCountryDto } from './dto/update-country.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Country } from './entities/country.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CountriesService {
  constructor(
    @InjectRepository(Country)
    private readonly countriesRepository: Repository<Country>,
  ) {}

  async create(createCountryDto: CreateCountryDto) {
    try {
      const checkCountryName = await this.countriesRepository.findOneBy({
        name: createCountryDto.name,
      });

      if (checkCountryName) {
        return {
          success: false,
          message: `County with ${checkCountryName.name} already exists`,
          status: 409,
        };
      }

      const createdCountry =
        await this.countriesRepository.create(createCountryDto);
      await this.countriesRepository.save(createdCountry);

      return {
        success: true,
        message: 'Country created successfully!',
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
      return await this.countriesRepository.find();
    } catch (error) {
      return {
        success: false,
        status: 500,
        message: error.message,
      };
    }
  }

  async findOne(id: number) {
    return this.countriesRepository.findOneBy({ id });
  }

  async update(id: number, updateCountryDto: UpdateCountryDto) {
    try {
      const checkCountry = await this.countriesRepository.findOneBy({ id });

      if (!checkCountry) {
        return {
          success: false,
          message: `Cannot find country with id ${id}`,
          status: 404,
        };
      }

      if(updateCountryDto.name){
        const checkCountryName = await this.countriesRepository.findOneBy({name: updateCountryDto.name});

        if(checkCountryName){
          return {
            success: false,
            message: `Country ${updateCountryDto.name} already exists`,
            status: 409
          }
        }
      }

      await this.countriesRepository.update(id, updateCountryDto);
      await this.countriesRepository.save(updateCountryDto);

      return {
        success: true,
        message: 'Country updated successfully!',
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
      const checkCountry = await this.countriesRepository.findOneBy({ id });

      if (checkCountry) {
        return {
          success: false,
          message: `Cannot find country with id ${id}`,
          status: 404,
        };
      }

      await this.countriesRepository.delete(id);

      return {
        success: true,
        message: 'Country deleted successfully!',
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
