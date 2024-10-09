import { CreateLikeDto } from './dto/create-like.dto';
import { Like } from './entities/like.entity';
import { Repository } from 'typeorm';
export declare class LikesService {
    private readonly likeRepository;
    constructor(likeRepository: Repository<Like>);
    create(createLikeDto: CreateLikeDto): Promise<{
        status: number;
        success: boolean;
        message: any;
    }>;
    findAll(): Promise<Like[] | {
        status: number;
        success: boolean;
        message: any;
    }>;
    findOne(id: number): Promise<Like | {
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
