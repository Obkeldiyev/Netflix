import { PartialType } from '@nestjs/mapped-types';
import { CreateActorDirectorSerialFilmDto } from './create-actor_director_serial_film.dto';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class UpdateActorDirectorSerialFilmDto extends PartialType(CreateActorDirectorSerialFilmDto) {
    @IsNumber()
    @IsNotEmpty()
    id: number
    
    @IsNumber()
    actor_id: number
    director_id: number
    film_id: number
}
