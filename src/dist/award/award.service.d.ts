import { CreateAwardDto } from './dto/create-award.dto';
import { UpdateAwardDto } from './dto/update-award.dto';
import { Award } from './entities/award.entity';
import { Repository } from 'typeorm';
export declare class AwardService {
    private readonly awardRepository;
    constructor(awardRepository: Repository<Award>);
    create(createAwardDto: CreateAwardDto): Promise<{
        success: boolean;
        message: string;
        mesage?: undefined;
    } | {
        success: boolean;
        mesage: any;
        message?: undefined;
    }>;
    findAll(): Promise<Award[] | {
        success: boolean;
        message: any;
    }>;
    findOne(id: number): Promise<{
        success: boolean;
        data: Award;
        message?: undefined;
    } | {
        success: boolean;
        message: any;
        data?: undefined;
    }>;
    update(updateAwardDto: UpdateAwardDto): Promise<{
        success: boolean;
        message: any;
    }>;
    remove(id: number): Promise<{
        success: boolean;
        message: any;
    }>;
}
