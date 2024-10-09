import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ActorDirectorSerialFilmService } from './actor_director_serial_film.service';
import { CreateActorDirectorSerialFilmDto } from './dto/create-actor_director_serial_film.dto';
import { UpdateActorDirectorSerialFilmDto } from './dto/update-actor_director_serial_film.dto';

@Controller('actor-director-serial-film')
export class ActorDirectorSerialFilmController {
  constructor(private readonly actorDirectorSerialFilmService: ActorDirectorSerialFilmService) {}

  @Post()
  create(@Body() createActorDirectorSerialFilmDto: CreateActorDirectorSerialFilmDto) {
    return this.actorDirectorSerialFilmService.create(createActorDirectorSerialFilmDto);
  }

  @Get()
  findAll() {
    return this.actorDirectorSerialFilmService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.actorDirectorSerialFilmService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateActorDirectorSerialFilmDto: UpdateActorDirectorSerialFilmDto) {
    return this.actorDirectorSerialFilmService.update(+id, updateActorDirectorSerialFilmDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.actorDirectorSerialFilmService.remove(+id);
  }
}
