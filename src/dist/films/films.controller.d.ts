import { FilmsService } from './films.service';
import { CreateFilmDto } from './dto/create-film.dto';
import { UpdateFilmDto } from './dto/update-film.dto';
export declare class FilmsController {
    private readonly filmsService;
    constructor(filmsService: FilmsService);
    create(createFilmDto: CreateFilmDto): Promise<{
        status: number;
        success: boolean;
        message: any;
    }>;
    findAll(): Promise<import("./entities/film.entity").Film[] | {
        status: number;
        success: boolean;
        message: any;
    }>;
    findOne(id: string): Promise<import("./entities/film.entity").Film | {
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
