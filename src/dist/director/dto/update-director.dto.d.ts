import { CreateDirectorDto } from './create-director.dto';
declare const UpdateDirectorDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateDirectorDto>>;
export declare class UpdateDirectorDto extends UpdateDirectorDto_base {
    id: number;
    fullname: string;
    age: number;
}
export {};
