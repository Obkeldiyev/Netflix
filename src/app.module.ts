import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FilmsModule } from './films/films.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SerialsModule } from './serials/serials.module';
import { CategoriesModule } from './categories/categories.module';
import { AgePermissionModule } from './age_permission/age_permission.module';
import { LikesModule } from './likes/likes.module';
import { DislikeModule } from './dislike/dislike.module';
import { ViewsModule } from './views/views.module';
import * as dotenv from 'dotenv';
import { Film } from './films/entities/film.entity';
import { Serial } from './serials/entities/serial.entity';
import { Like } from './likes/entities/like.entity';
import { Dislike } from './dislike/entities/dislike.entity';
import { View } from './views/entities/view.entity';
import { Category } from './categories/entities/category.entity';
import { AgePermission } from './age_permission/entities/age_permission.entity';
import { ActorModule } from './actor/actor.module';
import { ActorAwardModule } from './actor-award/actor-award.module';
import { ActorDirectorSerialFilmModule } from './actor_director_serial_film/actor_director_serial_film.module';
import { AwardModule } from './award/award.module';
import { DirectorModule } from './director/director.module';
import { DirectorAwardModule } from './director-award/director-award.module';
import { MovieAwardModule } from './movie-award/movie-award.module';
import { Actor } from './actor/entities/actor.entity';
import { ActorAward } from './actor-award/entities/actor-award.entity';
import { ActorDirectorSerialFilm } from './actor_director_serial_film/entities/actor_director_serial_film.entity';
import { Award } from './award/entities/award.entity';
import { Director } from './director/entities/director.entity';
import { DirectorAward } from './director-award/entities/director-award.entity';
import { MovieAward } from './movie-award/entities/movie-award.entity';
dotenv.config();

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST as string,
      port: process.env.DB_PORT as unknown as number,
      username: process.env.DB_USERNAME as string,
      password: process.env.DB_PASSWORD as string,
      database: process.env.DB_DATABASE as string,
      entities: [
        Film,
        Serial,
        Like,
        Dislike,
        View,
        Category,
        AgePermission,
        Actor,
        ActorAward,
        ActorDirectorSerialFilm,
        Award,
        Director,
        DirectorAward,
        MovieAward,
      ],
      synchronize: true,
      logging: true,
    }),
    FilmsModule,
    SerialsModule,
    CategoriesModule,
    AgePermissionModule,
    LikesModule,
    DislikeModule,
    ViewsModule,
    ActorModule,
    ActorAwardModule,
    ActorDirectorSerialFilmModule,
    AwardModule,
    DirectorModule,
    DirectorAwardModule,
    MovieAwardModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
