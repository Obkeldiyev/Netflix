import { Optional } from '@nestjs/common';
import { IsInt, IsNotEmpty, IsString } from 'class-validator';
import { PrimaryColumn } from 'typeorm';

export class UpdateFilmDto {
  @IsNotEmpty()
  @PrimaryColumn()
  id: string;

  @IsString()
  @Optional()
  name: string;

  @IsInt()
  @Optional()
  age_permission: number;

  @IsInt()
  @Optional()
  category_id: number;

  @IsInt()
  @Optional()
  time: number;

  @IsInt()
  @Optional()
  rating: number;

  @IsString()
  desc: string;

  @IsInt()
  @Optional()
  release_date: number;

  @IsString()
  @Optional()
  photos: string;

  @IsString()
  @Optional()
  videos: string;
}
