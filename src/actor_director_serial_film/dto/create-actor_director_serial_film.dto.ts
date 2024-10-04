import { IsNumber } from "class-validator"

export class CreateActorDirectorSerialFilmDto {
    @IsNumber()
    actor_id: number
    director_id: number
    film_id: number
}
