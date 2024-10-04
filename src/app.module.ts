import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DirectorModule } from './director/director.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '0490',
    database: 'netflix',
    entities: [],
    synchronize: true,
    autoLoadEntities: true
  }),
  DirectorModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
