import { CreateActorDto } from './dto/create-actor.dto';
import { UpdateActorDto } from './dto/update-actor.dto';
import { Actor } from './entities/actor.entity';
import { Repository } from 'typeorm';
export declare class ActorService {
    private readonly actorsRepository;
    constructor(actorsRepository: Repository<Actor>);
    create(createActorDto: CreateActorDto): Promise<{
        success: boolean;
        message: any;
    }>;
    findAll(): Promise<Actor[] | {
        success: boolean;
        message: any;
    }>;
    findOne(id: number): Promise<{
        success: boolean;
        data: Actor;
        message?: undefined;
    } | {
        success: boolean;
        message: any;
        data?: undefined;
    }>;
    update(updateActorDto: UpdateActorDto): Promise<{
        success: boolean;
        message: any;
    }>;
    remove(id: number): Promise<{
        success: boolean;
        message: any;
    }>;
}
