import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
export declare class CommentsController {
    private readonly commentsService;
    constructor(commentsService: CommentsService);
    create(createCommentDto: CreateCommentDto): Promise<{
        success: boolean;
        status: number;
        message: any;
    }>;
    findAll(): Promise<import("./entities/comment.entity").Comment[] | {
        success: boolean;
        status: number;
        message: any;
    }>;
    findOne(id: string): Promise<{
        success: boolean;
        data: import("./entities/comment.entity").Comment;
        status: number;
        message?: undefined;
    } | {
        success: boolean;
        status: number;
        message: any;
        data?: undefined;
    }>;
    update(id: string, updateCommentDto: UpdateCommentDto): Promise<{
        success: boolean;
        status: number;
        message: any;
    }>;
    remove(id: string): Promise<{
        success: boolean;
        status: number;
        message: any;
    }>;
}
