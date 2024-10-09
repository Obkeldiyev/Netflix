import { CreateContinentDto } from './dto/create-continent.dto';
import { UpdateContinentDto } from './dto/update-continent.dto';
import { Continent } from './entities/continent.entity';
import { Repository } from 'typeorm';
export declare class ContinentService {
    private readonly continentsRepository;
    constructor(continentsRepository: Repository<Continent>);
    create(createContinentDto: CreateContinentDto): Promise<{
        success: boolean;
        status: number;
        message: any;
    }>;
    findAll(): Promise<Continent[] | {
        success: boolean;
        status: number;
        message: any;
    }>;
    findOne(id: number): Promise<{
        success: boolean;
        data: Continent;
        status: number;
        message?: undefined;
    } | {
        success: boolean;
        status: number;
        message: any;
        data?: undefined;
    }>;
    update(id: number, updateContinentDto: UpdateContinentDto): Promise<{
        success: boolean;
        message: string;
        status: number;
    }>;
    remove(id: number): Promise<{
        success: boolean;
        status: number;
        message: any;
    }>;
}
