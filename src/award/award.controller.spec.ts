import { Test, TestingModule } from '@nestjs/testing';
import { AwardController } from './award.controller';
import { AwardService } from './award.service';

describe('AwardController', () => {
  let controller: AwardController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AwardController],
      providers: [AwardService],
    }).compile();

    controller = module.get<AwardController>(AwardController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
