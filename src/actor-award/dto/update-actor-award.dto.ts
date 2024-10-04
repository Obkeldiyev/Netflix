import { PartialType } from '@nestjs/mapped-types';
import { CreateActorAwardDto } from './create-actor-award.dto';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class UpdateActorAwardDto extends PartialType(CreateActorAwardDto) {
    @IsNumber()
    @IsNotEmpty()
    id: number
    
    @IsNumber()
    actor_id: number
    film_id: number
    award_id: number
}
