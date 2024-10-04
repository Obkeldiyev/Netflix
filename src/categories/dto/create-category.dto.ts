import { IsString } from 'class-validator';
import { PrimaryGeneratedColumn } from 'typeorm';

export class CreateCategoryDto {
  @PrimaryGeneratedColumn()
  id: number;

  @IsString()
  name: string;
}
