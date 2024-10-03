import { IsInt, IsNotEmpty, IsString } from 'class-validator';
import { PrimaryColumn } from 'typeorm';

export class CreateSerialDto {
  @IsNotEmpty()
  @PrimaryColumn()
  id: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsInt()
  age_permission: number;

  @IsNotEmpty()
  @IsInt()
  category_id: number;

  @IsNotEmpty()
  @IsInt()
  time: number;

  @IsNotEmpty()
  @IsInt()
  rating: number;

  @IsNotEmpty()
  @IsString()
  desc: string;

  @IsInt()
  release_date: number;

  @IsString()
  photos: string;

  @IsString()
  videos: string;
}
