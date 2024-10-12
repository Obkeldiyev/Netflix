import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { DirectorService } from './director.service';
import { CreateDirectorDto } from './dto/create-director.dto';
import { UpdateDirectorDto } from './dto/update-director.dto';

@Controller('director')
export class DirectorController {
  constructor(private readonly directorService: DirectorService) {}

  @Post('create')
  create(@Body() createDirectorDto: CreateDirectorDto) {
    return this.directorService.create(createDirectorDto);
  }

  @Get('all')
  findAll() {
    return this.directorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.directorService.findOne(+id);
  }

  @Patch('update')
  update(@Body() updateDirectorDto: UpdateDirectorDto) {
    return this.directorService.update(updateDirectorDto);
  }

  @Delete('delete/:id')
  remove(@Param('id') id: string) {
    return this.directorService.remove(+id);
  }

  @Post('login')
  login(@Body() username: string, @Body() password: string) {
    return this.directorService.login(username, password);
  }
}
