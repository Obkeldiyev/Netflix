import { Test, TestingModule } from '@nestjs/testing';
import { ActorAwardService } from './actor-award.service';

describe('ActorAwardService', () => {
  let service: ActorAwardService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ActorAwardService],
    }).compile();

    service = module.get<ActorAwardService>(ActorAwardService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
