import { Injectable } from '@nestjs/common';
import { CreateSerialDto } from './dto/create-serial.dto';
import { UpdateSerialDto } from './dto/update-serial.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Serial } from './entities/serial.entity';
import { Repository } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class SerialsService {
  constructor(
    @InjectRepository(Serial)
    private readonly serialRepository: Repository<Serial>,
  ) {}

  async create(createSerialDto: CreateSerialDto) {
    try {
      const check = await this.serialRepository.findOneBy({
        id: createSerialDto.id,
      });

      if (check) {
        return {
          status: 409,
          success: false,
          message: 'This name has been taken please choose another one',
        };
      } else {
        createSerialDto.id = uuidv4();
        const newSerial = this.serialRepository.create(createSerialDto);
        await this.serialRepository.save(newSerial);

        return {
          status: 202,
          success: true,
          message: 'The serial created successfully',
        };
      }
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
      return await this.serialRepository.find();
    } catch (error) {
      return {
        status: 500,
        success: false,
        message: error.message,
      };
    }
  }

  async findOne(id: string) {
    try {
      return await this.serialRepository.findOneBy({ id });
    } catch (error) {
      return {
        status: 500,
        success: false,
        message: error.message,
      };
    }
  }

  async update(id: string, updateSerialDto: UpdateSerialDto) {
    try {
      const check: Serial = await this.serialRepository.findOneBy({ id });

      if (check) {
        await this.serialRepository.update(id, updateSerialDto);
        await this.serialRepository.save(updateSerialDto);

        return {
          status: 201,
          success: true,
          message: 'The serial updated successfully',
        };
      } else {
        return {
          status: 404,
          success: false,
          message: 'This film does not exists',
        };
      }
    } catch (error) {
      return {
        status: 500,
        success: false,
        message: error.message,
      };
    }
  }

  async remove(id: string) {
    try {
      const check = await this.serialRepository.findOneBy({ id });

      if (check) {
        await this.serialRepository.delete(id);

        return {
          status: 201,
          success: true,
          message: 'The serial deleted successfully',
        };
      } else {
        return {
          status: 404,
          success: false,
          message: 'This serial does not exists',
        };
      }
    } catch (error) {
      return {
        status: 500,
        success: false,
        message: error.message,
      };
    }
  }
}
