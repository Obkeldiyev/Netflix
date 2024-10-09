import { ActorDirectorSerialFilmService } from './actor_director_serial_film.service';
import { CreateActorDirectorSerialFilmDto } from './dto/create-actor_director_serial_film.dto';
import { UpdateActorDirectorSerialFilmDto } from './dto/update-actor_director_serial_film.dto';
export declare class ActorDirectorSerialFilmController {
    private readonly actorDirectorSerialFilmService;
    constructor(actorDirectorSerialFilmService: ActorDirectorSerialFilmService);
    create(createActorDirectorSerialFilmDto: CreateActorDirectorSerialFilmDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateActorDirectorSerialFilmDto: UpdateActorDirectorSerialFilmDto): string;
    remove(id: string): string;
}
