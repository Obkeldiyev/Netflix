import { Test, TestingModule } from '@nestjs/testing';
import { DislikeController } from './dislike.controller';
import { DislikeService } from './dislike.service';

describe('DislikeController', () => {
  let controller: DislikeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DislikeController],
      providers: [DislikeService],
    }).compile();

    controller = module.get<DislikeController>(DislikeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
