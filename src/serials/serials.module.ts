import { Module } from '@nestjs/common';
import { SerialsService } from './serials.service';
import { SerialsController } from './serials.controller';

@Module({
  controllers: [SerialsController],
  providers: [SerialsService],
})
export class SerialsModule {}
