import { CreateDirectorAwardDto } from './create-director-award.dto';
declare const UpdateDirectorAwardDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateDirectorAwardDto>>;
export declare class UpdateDirectorAwardDto extends UpdateDirectorAwardDto_base {
    id: number;
    director_id: number;
    film_id: number;
    award_id: number;
}
export {};
