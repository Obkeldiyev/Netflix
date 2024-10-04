import { Test, TestingModule } from '@nestjs/testing';
import { ActorAwardController } from './actor-award.controller';
import { ActorAwardService } from './actor-award.service';

describe('ActorAwardController', () => {
  let controller: ActorAwardController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ActorAwardController],
      providers: [ActorAwardService],
    }).compile();

    controller = module.get<ActorAwardController>(ActorAwardController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
