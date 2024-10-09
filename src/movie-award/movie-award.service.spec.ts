import { Test, TestingModule } from '@nestjs/testing';
import { MovieAwardService } from './movie-award.service';

describe('MovieAwardService', () => {
  let service: MovieAwardService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MovieAwardService],
    }).compile();

    service = module.get<MovieAwardService>(MovieAwardService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
