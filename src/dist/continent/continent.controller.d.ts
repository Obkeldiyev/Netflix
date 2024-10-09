import { ContinentService } from './continent.service';
import { CreateContinentDto } from './dto/create-continent.dto';
import { UpdateContinentDto } from './dto/update-continent.dto';
export declare class ContinentController {
    private readonly continentService;
    constructor(continentService: ContinentService);
    create(createContinentDto: CreateContinentDto): Promise<{
        success: boolean;
        status: number;
        message: any;
    }>;
    findAll(): Promise<import("./entities/continent.entity").Continent[] | {
        success: boolean;
        status: number;
        message: any;
    }>;
    findOne(id: string): Promise<{
        success: boolean;
        data: import("./entities/continent.entity").Continent;
        status: number;
        message?: undefined;
    } | {
        success: boolean;
        status: number;
        message: any;
        data?: undefined;
    }>;
    update(id: string, updateContinentDto: UpdateContinentDto): Promise<{
        success: boolean;
        message: string;
        status: number;
    }>;
    remove(id: string): Promise<{
        success: boolean;
        status: number;
        message: any;
    }>;
}
