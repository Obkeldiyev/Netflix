import { DirectorService } from './director.service';
import { CreateDirectorDto } from './dto/create-director.dto';
import { UpdateDirectorDto } from './dto/update-director.dto';
export declare class DirectorController {
    private readonly directorService;
    constructor(directorService: DirectorService);
    create(createDirectorDto: CreateDirectorDto): Promise<{
        success: boolean;
        message: any;
    }>;
    findAll(): Promise<import("./entities/director.entity").Director[] | {
        success: boolean;
        message: any;
    }>;
    findOne(id: string): Promise<{
        success: boolean;
        data: import("./entities/director.entity").Director;
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
    remove(id: string): Promise<{
        success: boolean;
        message: any;
    }>;
}
