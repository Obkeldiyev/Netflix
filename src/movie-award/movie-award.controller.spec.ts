import { Test, TestingModule } from '@nestjs/testing';
import { MovieAwardController } from './movie-award.controller';
import { MovieAwardService } from './movie-award.service';

describe('MovieAwardController', () => {
  let controller: MovieAwardController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MovieAwardController],
      providers: [MovieAwardService],
    }).compile();

    controller = module.get<MovieAwardController>(MovieAwardController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
