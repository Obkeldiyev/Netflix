import { Module } from '@nestjs/common';
import { ActorDirectorSerialFilmService } from './actor_director_serial_film.service';
import { ActorDirectorSerialFilmController } from './actor_director_serial_film.controller';

@Module({
  controllers: [ActorDirectorSerialFilmController],
  providers: [ActorDirectorSerialFilmService],
})
export class ActorDirectorSerialFilmModule {}
