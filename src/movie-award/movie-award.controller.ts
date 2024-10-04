import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MovieAwardService } from './movie-award.service';
import { CreateMovieAwardDto } from './dto/create-movie-award.dto';
import { UpdateMovieAwardDto } from './dto/update-movie-award.dto';

@Controller('movie-award')
export class MovieAwardController {
  constructor(private readonly movieAwardService: MovieAwardService) {}

  @Post()
  create(@Body() createMovieAwardDto: CreateMovieAwardDto) {
    return this.movieAwardService.create(createMovieAwardDto);
  }

  @Get()
  findAll() {
    return this.movieAwardService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.movieAwardService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMovieAwardDto: UpdateMovieAwardDto) {
    return this.movieAwardService.update(+id, updateMovieAwardDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.movieAwardService.remove(+id);
  }
}
