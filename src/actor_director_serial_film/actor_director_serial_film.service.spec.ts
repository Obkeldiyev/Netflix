import { Test, TestingModule } from '@nestjs/testing';
import { ActorDirectorSerialFilmService } from './actor_director_serial_film.service';

describe('ActorDirectorSerialFilmService', () => {
  let service: ActorDirectorSerialFilmService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ActorDirectorSerialFilmService],
    }).compile();

    service = module.get<ActorDirectorSerialFilmService>(ActorDirectorSerialFilmService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
