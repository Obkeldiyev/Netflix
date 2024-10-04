import { Module } from '@nestjs/common';
import { ViewsService } from './views.service';
import { ViewsController } from './views.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { View } from './entities/view.entity';

@Module({
  imports: [TypeOrmModule.forFeature([View])],
  controllers: [ViewsController],
  providers: [ViewsService],
})
export class ViewsModule {}
