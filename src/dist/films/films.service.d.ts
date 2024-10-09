import { CreateFilmDto } from './dto/create-film.dto';
import { UpdateFilmDto } from './dto/update-film.dto';
import { Film } from './entities/film.entity';
import { Repository } from 'typeorm';
export declare class FilmsService {
    private readonly filmRepository;
    constructor(filmRepository: Repository<Film>);
    create(createFilmDto: CreateFilmDto): Promise<{
        status: number;
        success: boolean;
        message: any;
    }>;
    findAll(): Promise<Film[] | {
        status: number;
        success: boolean;
        message: any;
    }>;
    findOne(id: string): Promise<Film | {
        status: number;
        success: boolean;
        message: any;
    }>;
    update(id: string, updateFilmDto: UpdateFilmDto): Promise<{
        status: number;
        success: boolean;
        message: any;
    }>;
    remove(id: string): Promise<{
        status: number;
        success: boolean;
        message: any;
    }>;
}
