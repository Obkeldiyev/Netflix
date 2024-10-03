import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';
import { User } from './users/entities/user.entity';
import { Admin } from './admins/entities/admin.entity';
import { AdminsModule } from './admins/admins.module';
import { ContinentsModule } from './continents/continents.module';
import { Continent } from './continents/entities/continent.entity';
import { CountriesModule } from './countries/countries.module';
import { Country } from './countries/entities/country.entity';

dotenv.config();

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: process.env.password,
      database: process.env.database,
      entities: [User, Admin, Continent, Country],
      synchronize: true,
    }),
    UsersModule,
    AdminsModule,
    ContinentsModule,
    CountriesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
