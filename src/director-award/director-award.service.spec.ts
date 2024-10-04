import { Test, TestingModule } from '@nestjs/testing';
import { DirectorAwardService } from './director-award.service';

describe('DirectorAwardService', () => {
  let service: DirectorAwardService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DirectorAwardService],
    }).compile();

    service = module.get<DirectorAwardService>(DirectorAwardService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
