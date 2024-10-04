import { Module } from '@nestjs/common';
import { MovieAwardService } from './movie-award.service';
import { MovieAwardController } from './movie-award.controller';

@Module({
  controllers: [MovieAwardController],
  providers: [MovieAwardService],
})
export class MovieAwardModule {}
