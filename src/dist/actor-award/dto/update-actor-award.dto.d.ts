import { CreateActorAwardDto } from './create-actor-award.dto';
declare const UpdateActorAwardDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateActorAwardDto>>;
export declare class UpdateActorAwardDto extends UpdateActorAwardDto_base {
    id: number;
    actor_id: number;
    film_id: number;
    award_id: number;
}
export {};
