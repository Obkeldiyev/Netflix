import { AwardService } from './award.service';
import { CreateAwardDto } from './dto/create-award.dto';
import { UpdateAwardDto } from './dto/update-award.dto';
export declare class AwardController {
    private readonly awardService;
    constructor(awardService: AwardService);
    create(createAwardDto: CreateAwardDto): Promise<{
        success: boolean;
        message: string;
        mesage?: undefined;
    } | {
        success: boolean;
        mesage: any;
        message?: undefined;
    }>;
    findAll(): Promise<import("./entities/award.entity").Award[] | {
        success: boolean;
        message: any;
    }>;
    findOne(id: string): Promise<{
        success: boolean;
        data: import("./entities/award.entity").Award;
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
    remove(id: string): Promise<{
        success: boolean;
        message: any;
    }>;
}
