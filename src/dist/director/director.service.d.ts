import { CreateDirectorDto } from './dto/create-director.dto';
import { UpdateDirectorDto } from './dto/update-director.dto';
import { Director } from './entities/director.entity';
import { Repository } from 'typeorm';
export declare class DirectorService {
    private readonly directorRepository;
    constructor(directorRepository: Repository<Director>);
    create(createDirectorDto: CreateDirectorDto): Promise<{
        success: boolean;
        message: any;
    }>;
    findAll(): Promise<Director[] | {
        success: boolean;
        message: any;
    }>;
    findOne(id: number): Promise<{
        success: boolean;
        data: Director;
        message?: undefined;
    } | {
        success: boolean;
        message: any;
        data?: undefined;
    }>;
    update(updateDirectorDto: UpdateDirectorDto): Promise<{
        success: boolean;
        message: any;
    }>;
    remove(id: number): Promise<{
        success: boolean;
        message: any;
    }>;
}
