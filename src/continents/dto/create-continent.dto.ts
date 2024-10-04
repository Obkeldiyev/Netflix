import { IsNotEmpty, IsString } from 'class-validator';

export class CreateContinentDto {
  @IsString()
  @IsNotEmpty()
  name: string;
}
