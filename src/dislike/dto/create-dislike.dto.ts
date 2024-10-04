import { IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { PrimaryGeneratedColumn } from 'typeorm';

export class CreateDislikeDto {
  @PrimaryGeneratedColumn()
  @IsNotEmpty()
  @IsInt()
  id: number;

  @IsNotEmpty()
  @IsInt()
  user_id: number;

  @IsNotEmpty()
  @IsString()
  film_id: string;

  @IsOptional()
  time_liked?: Date;
}
