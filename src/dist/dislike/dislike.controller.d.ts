import { DislikeService } from './dislike.service';
import { CreateDislikeDto } from './dto/create-dislike.dto';
export declare class DislikeController {
    private readonly dislikeService;
    constructor(dislikeService: DislikeService);
    create(createDislikeDto: CreateDislikeDto): Promise<{
        status: number;
        success: boolean;
        message: any;
    }>;
    findAll(): Promise<import("./entities/dislike.entity").Dislike[] | {
        status: number;
        success: boolean;
        message: any;
    }>;
    findOne(id: string): Promise<import("./entities/dislike.entity").Dislike | {
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
