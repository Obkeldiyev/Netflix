import { Test, TestingModule } from '@nestjs/testing';
import { DislikeService } from './dislike.service';

describe('DislikeService', () => {
  let service: DislikeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DislikeService],
    }).compile();

    service = module.get<DislikeService>(DislikeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
