import { CreateMovieAwardDto } from './dto/create-movie-award.dto';
import { UpdateMovieAwardDto } from './dto/update-movie-award.dto';
export declare class MovieAwardService {
    create(createMovieAwardDto: CreateMovieAwardDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateMovieAwardDto: UpdateMovieAwardDto): string;
    remove(id: number): string;
}
