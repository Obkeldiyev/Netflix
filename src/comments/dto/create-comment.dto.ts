import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateCommentDto {
  @IsString()
  @IsNotEmpty()
  text: string;

  @IsNumber()
  user_id: number;

  @IsNumber()
  film_id: number;
}
