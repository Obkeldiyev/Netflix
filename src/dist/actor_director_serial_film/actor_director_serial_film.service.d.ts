import { CreateActorDirectorSerialFilmDto } from './dto/create-actor_director_serial_film.dto';
import { UpdateActorDirectorSerialFilmDto } from './dto/update-actor_director_serial_film.dto';
export declare class ActorDirectorSerialFilmService {
    create(createActorDirectorSerialFilmDto: CreateActorDirectorSerialFilmDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateActorDirectorSerialFilmDto: UpdateActorDirectorSerialFilmDto): string;
    remove(id: number): string;
}
