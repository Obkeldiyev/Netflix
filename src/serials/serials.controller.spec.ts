import { Test, TestingModule } from '@nestjs/testing';
import { SerialsController } from './serials.controller';
import { SerialsService } from './serials.service';

describe('SerialsController', () => {
  let controller: SerialsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SerialsController],
      providers: [SerialsService],
    }).compile();

    controller = module.get<SerialsController>(SerialsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
