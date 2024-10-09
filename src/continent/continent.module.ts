import { Module } from '@nestjs/common';
import { ContinentService } from './continent.service';
import { ContinentController } from './continent.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Continent } from './entities/continent.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Continent])],
  controllers: [ContinentController],
  providers: [ContinentService],
})
export class ContinentModule {}
