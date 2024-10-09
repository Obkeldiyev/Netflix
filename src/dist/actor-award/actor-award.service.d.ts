import { CreateActorAwardDto } from './dto/create-actor-award.dto';
import { UpdateActorAwardDto } from './dto/update-actor-award.dto';
export declare class ActorAwardService {
    create(createActorAwardDto: CreateActorAwardDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateActorAwardDto: UpdateActorAwardDto): string;
    remove(id: number): string;
}
