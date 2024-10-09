import { Module } from '@nestjs/common';
import { ActorAwardService } from './actor-award.service';
import { ActorAwardController } from './actor-award.controller';

@Module({
  controllers: [ActorAwardController],
  providers: [ActorAwardService],
})
export class ActorAwardModule {}
