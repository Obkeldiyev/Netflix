import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
<<<<<<< HEAD
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
=======

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
>>>>>>> 061c4e46a2be97f8b77e2df0b843aece1fbaf4ad
  await app.listen(3000);
}
bootstrap();
