import { ActorService } from './actor.service';
import { CreateActorDto } from './dto/create-actor.dto';
import { UpdateActorDto } from './dto/update-actor.dto';
export declare class ActorController {
    private readonly actorService;
    constructor(actorService: ActorService);
    create(createActorDto: CreateActorDto): Promise<{
        success: boolean;
        message: any;
    }>;
    findAll(): Promise<import("./entities/actor.entity").Actor[] | {
        success: boolean;
        message: any;
    }>;
    findOne(id: string): Promise<{
        success: boolean;
        data: import("./entities/actor.entity").Actor;
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
    remove(id: string): Promise<{
        success: boolean;
        message: any;
    }>;
}
