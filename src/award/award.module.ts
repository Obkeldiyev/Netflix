import { Module } from '@nestjs/common';
import { AwardService } from './award.service';
import { AwardController } from './award.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Award } from './entities/award.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Award])],
  controllers: [AwardController],
  providers: [AwardService],
})
export class AwardModule {}
