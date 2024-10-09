import { LikesService } from './likes.service';
import { CreateLikeDto } from './dto/create-like.dto';
export declare class LikesController {
    private readonly likesService;
    constructor(likesService: LikesService);
    create(createLikeDto: CreateLikeDto): Promise<{
        status: number;
        success: boolean;
        message: any;
    }>;
    findAll(): Promise<import("./entities/like.entity").Like[] | {
        status: number;
        success: boolean;
        message: any;
    }>;
    findOne(id: string): Promise<import("./entities/like.entity").Like | {
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
