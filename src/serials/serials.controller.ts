import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SerialsService } from './serials.service';
import { CreateSerialDto } from './dto/create-serial.dto';
import { UpdateSerialDto } from './dto/update-serial.dto';

@Controller('serials')
export class SerialsController {
  constructor(private readonly serialsService: SerialsService) {}

  @Post()
  create(@Body() createSerialDto: CreateSerialDto) {
    return this.serialsService.create(createSerialDto);
  }

  @Get()
  findAll() {
    return this.serialsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.serialsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSerialDto: UpdateSerialDto) {
    return this.serialsService.update(+id, updateSerialDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.serialsService.remove(+id);
  }
}
