import { IsNumber } from "class-validator"

export class CreateDirectorAwardDto {
    @IsNumber()
    director_id :number
    film_id: number
    award_id: number
}
