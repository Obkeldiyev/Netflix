import { Test, TestingModule } from '@nestjs/testing';
import { DirectorAwardController } from './director-award.controller';
import { DirectorAwardService } from './director-award.service';

describe('DirectorAwardController', () => {
  let controller: DirectorAwardController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DirectorAwardController],
      providers: [DirectorAwardService],
    }).compile();

    controller = module.get<DirectorAwardController>(DirectorAwardController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
