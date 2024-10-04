import { IsInt } from 'class-validator';
import { PrimaryGeneratedColumn } from 'typeorm';

export class CreateAgePermissionDto {
  @PrimaryGeneratedColumn()
  id: number;

  @IsInt()
  age: number;
}
