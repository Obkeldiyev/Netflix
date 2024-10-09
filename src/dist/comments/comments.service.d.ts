import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { Comment } from './entities/comment.entity';
import { Repository } from 'typeorm';
export declare class CommentsService {
    private readonly commentsRepository;
    constructor(commentsRepository: Repository<Comment>);
    create(createCommentDto: CreateCommentDto): Promise<{
        success: boolean;
        status: number;
        message: any;
    }>;
    findAll(): Promise<Comment[] | {
        success: boolean;
        status: number;
        message: any;
    }>;
    findOne(id: number): Promise<{
        success: boolean;
        data: Comment;
        status: number;
        message?: undefined;
    } | {
        success: boolean;
        status: number;
        message: any;
        data?: undefined;
    }>;
    update(id: number, updateCommentDto: UpdateCommentDto): Promise<{
        success: boolean;
        status: number;
        message: any;
    }>;
    remove(id: number): Promise<{
        success: boolean;
        status: number;
        message: any;
    }>;
}
