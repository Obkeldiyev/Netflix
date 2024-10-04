import { Module } from '@nestjs/common';
import { DirectorAwardService } from './director-award.service';
import { DirectorAwardController } from './director-award.controller';

@Module({
  controllers: [DirectorAwardController],
  providers: [DirectorAwardService],
})
export class DirectorAwardModule {}
