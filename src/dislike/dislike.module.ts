import { Module } from '@nestjs/common';
import { DislikeService } from './dislike.service';
import { DislikeController } from './dislike.controller';
import { Dislike } from './entities/dislike.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Dislike])],
  controllers: [DislikeController],
  providers: [DislikeService],
})
export class DislikeModule {}
