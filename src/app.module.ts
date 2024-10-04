import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DirectorModule } from './director/director.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ActorModule } from './actor/actor.module';
import { AwardModule } from './award/award.module';
import { ActorAwardModule } from './actor-award/actor-award.module';
import { DirectorAwardModule } from './director-award/director-award.module';
import { MovieAwardModule } from './movie-award/movie-award.module';
import { ActorDirectorSerialFilmModule } from './actor_director_serial_film/actor_director_serial_film.module';

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
  DirectorModule,
  ActorModule,
  AwardModule,
  ActorAwardModule,
  DirectorAwardModule,
  MovieAwardModule,
  ActorDirectorSerialFilmModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
