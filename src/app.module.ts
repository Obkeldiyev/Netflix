import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { User } from './users/entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CountriesModule } from './countries/countries.module';
import * as dotenv from 'dotenv';
import { Country } from './countries/entities/country.entity';
import { ContinentModule } from './continent/continent.module';
import { Continent } from './continent/entities/continent.entity';
import { CommentsModule } from './comments/comments.module';
import { Comment } from './comments/entities/comment.entity';
import { AdminsModule } from './admins/admins.module';
import { Admin } from './admins/entities/admin.entity';

dotenv.config();

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: `${process.env.HOST}`,
      port: process.env.PORT as unknown as number,
      username: 'postgres',
      password: `${process.env.PASSWORD}`,
      database: `${process.env.DB_NAME}`,
      entities: [User, Country, Continent, Comment, Admin],
      synchronize: true,
      logging: true,
    }),
    UsersModule,
    CountriesModule,
    ContinentModule,
    CommentsModule,
    AdminsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}