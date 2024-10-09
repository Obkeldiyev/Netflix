import { MovieAwardService } from './movie-award.service';
import { CreateMovieAwardDto } from './dto/create-movie-award.dto';
import { UpdateMovieAwardDto } from './dto/update-movie-award.dto';
export declare class MovieAwardController {
    private readonly movieAwardService;
    constructor(movieAwardService: MovieAwardService);
    create(createMovieAwardDto: CreateMovieAwardDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateMovieAwardDto: UpdateMovieAwardDto): string;
    remove(id: string): string;
}
