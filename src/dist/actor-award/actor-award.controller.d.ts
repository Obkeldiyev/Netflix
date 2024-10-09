import { ActorAwardService } from './actor-award.service';
import { CreateActorAwardDto } from './dto/create-actor-award.dto';
import { UpdateActorAwardDto } from './dto/update-actor-award.dto';
export declare class ActorAwardController {
    private readonly actorAwardService;
    constructor(actorAwardService: ActorAwardService);
    create(createActorAwardDto: CreateActorAwardDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateActorAwardDto: UpdateActorAwardDto): string;
    remove(id: string): string;
}
