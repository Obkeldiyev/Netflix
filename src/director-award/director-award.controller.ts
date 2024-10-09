import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DirectorAwardService } from './director-award.service';
import { CreateDirectorAwardDto } from './dto/create-director-award.dto';
import { UpdateDirectorAwardDto } from './dto/update-director-award.dto';

@Controller('director-award')
export class DirectorAwardController {
  constructor(private readonly directorAwardService: DirectorAwardService) {}

  @Post()
  create(@Body() createDirectorAwardDto: CreateDirectorAwardDto) {
    return this.directorAwardService.create(createDirectorAwardDto);
  }

  @Get()
  findAll() {
    return this.directorAwardService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.directorAwardService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDirectorAwardDto: UpdateDirectorAwardDto) {
    return this.directorAwardService.update(+id, updateDirectorAwardDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.directorAwardService.remove(+id);
  }
}
