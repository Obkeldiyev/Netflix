import { IsNumber } from "class-validator"

export class CreateMovieAwardDto {
    @IsNumber()
    movie_id: number
    award_id: number
}
