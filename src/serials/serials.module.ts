import { Module } from '@nestjs/common';
import { SerialsService } from './serials.service';
import { SerialsController } from './serials.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Serial } from './entities/serial.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Serial])],
  controllers: [SerialsController],
  providers: [SerialsService],
})
export class SerialsModule {}
