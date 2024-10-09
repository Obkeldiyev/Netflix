import { Injectable } from '@nestjs/common';
import { CreateActorDirectorSerialFilmDto } from './dto/create-actor_director_serial_film.dto';
import { UpdateActorDirectorSerialFilmDto } from './dto/update-actor_director_serial_film.dto';

@Injectable()
export class ActorDirectorSerialFilmService {
  create(createActorDirectorSerialFilmDto: CreateActorDirectorSerialFilmDto) {
    return 'This action adds a new actorDirectorSerialFilm';
  }

  findAll() {
    return `This action returns all actorDirectorSerialFilm`;
  }

  findOne(id: number) {
    return `This action returns a #${id} actorDirectorSerialFilm`;
  }

  update(id: number, updateActorDirectorSerialFilmDto: UpdateActorDirectorSerialFilmDto) {
    return `This action updates a #${id} actorDirectorSerialFilm`;
  }

  remove(id: number) {
    return `This action removes a #${id} actorDirectorSerialFilm`;
  }
}
