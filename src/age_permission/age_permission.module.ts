import { Module } from '@nestjs/common';
import { AgePermissionService } from './age_permission.service';
import { AgePermissionController } from './age_permission.controller';

@Module({
  controllers: [AgePermissionController],
  providers: [AgePermissionService],
})
export class AgePermissionModule {}
