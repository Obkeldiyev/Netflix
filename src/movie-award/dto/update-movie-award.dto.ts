import { PartialType } from '@nestjs/mapped-types';
import { CreateMovieAwardDto } from './create-movie-award.dto';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class UpdateMovieAwardDto extends PartialType(CreateMovieAwardDto) {
    @IsNumber()
    @IsNotEmpty()
    id: number
    
    @IsNumber()
    movie_id: number
    award_id: number
}
