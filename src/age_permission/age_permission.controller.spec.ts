import { Test, TestingModule } from '@nestjs/testing';
import { AgePermissionController } from './age_permission.controller';
import { AgePermissionService } from './age_permission.service';

describe('AgePermissionController', () => {
  let controller: AgePermissionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AgePermissionController],
      providers: [AgePermissionService],
    }).compile();

    controller = module.get<AgePermissionController>(AgePermissionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
