import { Module } from '@nestjs/common';
import { AwardService } from './award.service';
import { AwardController } from './award.controller';

@Module({
  controllers: [AwardController],
  providers: [AwardService],
})
export class AwardModule {}
