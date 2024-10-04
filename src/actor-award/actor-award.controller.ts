import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ActorAwardService } from './actor-award.service';
import { CreateActorAwardDto } from './dto/create-actor-award.dto';
import { UpdateActorAwardDto } from './dto/update-actor-award.dto';

@Controller('actor-award')
export class ActorAwardController {
  constructor(private readonly actorAwardService: ActorAwardService) {}

  @Post()
  create(@Body() createActorAwardDto: CreateActorAwardDto) {
    return this.actorAwardService.create(createActorAwardDto);
  }

  @Get()
  findAll() {
    return this.actorAwardService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.actorAwardService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateActorAwardDto: UpdateActorAwardDto) {
    return this.actorAwardService.update(+id, updateActorAwardDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.actorAwardService.remove(+id);
  }
}
