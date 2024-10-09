import { CreateDislikeDto } from './dto/create-dislike.dto';
import { Repository } from 'typeorm';
import { Dislike } from './entities/dislike.entity';
export declare class DislikeService {
    private readonly dislikeRepository;
    likeRepository: any;
    constructor(dislikeRepository: Repository<Dislike>);
    create(CreateDislikeDto: CreateDislikeDto): Promise<{
        status: number;
        success: boolean;
        message: any;
    }>;
    findAll(): Promise<Dislike[] | {
        status: number;
        success: boolean;
        message: any;
    }>;
    findOne(id: number): Promise<Dislike | {
        status: number;
        success: boolean;
        message: any;
    }>;
    remove(id: number): Promise<{
        status: number;
        success: boolean;
        message: any;
    }>;
}
