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
import { User } from './users/entities/user.entity';
import { Continent } from './continents/entities/continent.entity';
import { Country } from './countries/entities/country.entity';
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
        User,
        Continent,
        Country,
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
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
