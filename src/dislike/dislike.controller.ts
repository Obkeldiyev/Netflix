import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { DislikeService } from './dislike.service';
import { CreateDislikeDto } from './dto/create-dislike.dto';

@Controller('dislike')
export class DislikeController {
  constructor(private readonly dislikeService: DislikeService) {}

  @Post()
  create(@Body() createDislikeDto: CreateDislikeDto) {
    return this.dislikeService.create(createDislikeDto);
  }

  @Get()
  findAll() {
    return this.dislikeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dislikeService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dislikeService.remove(+id);
  }
}
