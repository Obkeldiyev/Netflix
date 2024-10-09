import { IsNumber } from "class-validator"

export class CreateActorAwardDto {
    @IsNumber()
    actor_id: number
    film_id: number
    award_id: number
}
