import { CreateMovieAwardDto } from './create-movie-award.dto';
declare const UpdateMovieAwardDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateMovieAwardDto>>;
export declare class UpdateMovieAwardDto extends UpdateMovieAwardDto_base {
    id: number;
    movie_id: number;
    award_id: number;
}
export {};
