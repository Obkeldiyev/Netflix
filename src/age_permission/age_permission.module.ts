import { Module } from '@nestjs/common';
import { AgePermissionService } from './age_permission.service';
import { AgePermissionController } from './age_permission.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AgePermission } from './entities/age_permission.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AgePermission])],
  controllers: [AgePermissionController],
  providers: [AgePermissionService],
})
export class AgePermissionModule {}
