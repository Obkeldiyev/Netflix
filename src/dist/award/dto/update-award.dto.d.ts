import { CreateAwardDto } from './create-award.dto';
declare const UpdateAwardDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateAwardDto>>;
export declare class UpdateAwardDto extends UpdateAwardDto_base {
    id: number;
    name: string;
    year_taken: number;
}
export {};
