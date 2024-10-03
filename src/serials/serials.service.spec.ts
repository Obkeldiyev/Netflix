import { Test, TestingModule } from '@nestjs/testing';
import { SerialsService } from './serials.service';

describe('SerialsService', () => {
  let service: SerialsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SerialsService],
    }).compile();

    service = module.get<SerialsService>(SerialsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
