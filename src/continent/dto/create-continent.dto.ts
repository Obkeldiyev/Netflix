import { IsString } from 'class-validator';

export class CreateContinentDto {
  @IsString()
  name: string;
}
