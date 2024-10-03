import { Test, TestingModule } from '@nestjs/testing';
import { AgePermissionService } from './age_permission.service';

describe('AgePermissionService', () => {
  let service: AgePermissionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AgePermissionService],
    }).compile();

    service = module.get<AgePermissionService>(AgePermissionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
