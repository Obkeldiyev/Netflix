import { Test, TestingModule } from '@nestjs/testing';
import { ActorDirectorSerialFilmController } from './actor_director_serial_film.controller';
import { ActorDirectorSerialFilmService } from './actor_director_serial_film.service';

describe('ActorDirectorSerialFilmController', () => {
  let controller: ActorDirectorSerialFilmController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ActorDirectorSerialFilmController],
      providers: [ActorDirectorSerialFilmService],
    }).compile();

    controller = module.get<ActorDirectorSerialFilmController>(ActorDirectorSerialFilmController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
