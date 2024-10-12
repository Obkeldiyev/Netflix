import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
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
import { Admin } from './admins/entities/admin.entity';
import { Comment } from './comments/entities/comment.entity';
import { Continent } from './continent/entities/continent.entity';
import { Country } from './countries/entities/country.entity';
import { User } from './users/entities/user.entity';
import { AdminsModule } from './admins/admins.module';
import { CommentsModule } from './comments/comments.module';
import { ContinentModule } from './continent/continent.module';
import { CountriesModule } from './countries/countries.module';
import { UsersModule } from './users/users.module';
import { ActorModule } from './actor/actor.module';
import { ActorAward } from './actor-award/entities/actor-award.entity';
import { ActorAwardModule } from './actor-award/actor-award.module';
import { DirectorModule } from './director/director.module';
import { DirectorAward } from './director-award/entities/director-award.entity';
import { MovieAwardModule } from './movie-award/movie-award.module';
import { Actor } from './actor/entities/actor.entity';
import { ActorDirectorSerialFilm } from './actor_director_serial_film/entities/actor_director_serial_film.entity';
import { ActorDirectorSerialFilmModule } from './actor_director_serial_film/actor_director_serial_film.module';
import { Award } from './award/entities/award.entity';
import { AwardModule } from './award/award.module';
import { Director } from './director/entities/director.entity';
import { MovieAward } from './movie-award/entities/movie-award.entity';
import { verifyToken } from './middlewares/verifyToken';
import { verifyRole } from './middlewares/verifyRole';

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
        Admin,
        Comment,
        Continent,
        Country,
        User,
        Actor,
        ActorDirectorSerialFilm,
        ActorAward,
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
    AdminsModule,
    CommentsModule,
    ContinentModule,
    CountriesModule,
    UsersModule,
    ActorModule,
    ActorAward,
    ActorAwardModule,
    DirectorModule,
    DirectorAward,
    MovieAwardModule,
    ActorDirectorSerialFilmModule,
    AwardModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(verifyToken, verifyRole('admin')).forRoutes('*');
  }
}
