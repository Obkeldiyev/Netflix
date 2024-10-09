import { CreateActorDto } from './create-actor.dto';
declare const UpdateActorDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateActorDto>>;
export declare class UpdateActorDto extends UpdateActorDto_base {
    id: number;
    fullname: string;
    age: number;
}
export {};
