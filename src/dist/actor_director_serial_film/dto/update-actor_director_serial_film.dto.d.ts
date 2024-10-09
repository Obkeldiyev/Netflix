import { CreateActorDirectorSerialFilmDto } from './create-actor_director_serial_film.dto';
declare const UpdateActorDirectorSerialFilmDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateActorDirectorSerialFilmDto>>;
export declare class UpdateActorDirectorSerialFilmDto extends UpdateActorDirectorSerialFilmDto_base {
    id: number;
    actor_id: number;
    director_id: number;
    film_id: number;
}
export {};
