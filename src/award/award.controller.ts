import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AwardService } from './award.service';
import { CreateAwardDto } from './dto/create-award.dto';
import { UpdateAwardDto } from './dto/update-award.dto';

@Controller('award')
export class AwardController {
  constructor(private readonly awardService: AwardService) {}

  @Post('create')
  create(@Body() createAwardDto: CreateAwardDto) {
    return this.awardService.create(createAwardDto);
  }

  @Get('all')
  findAll() {
    return this.awardService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.awardService.findOne(+id);
  }

  @Patch('update')
  update(@Body() updateAwardDto: UpdateAwardDto) {
    return this.awardService.update(updateAwardDto);
  }

  @Delete('delete/:id')
  remove(@Param('id') id: string) {
    return this.awardService.remove(+id);
  }
}
