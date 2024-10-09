import { CreateViewDto } from './dto/create-view.dto';
import { View } from './entities/view.entity';
import { Repository } from 'typeorm';
export declare class ViewsService {
    private readonly viewRepository;
    constructor(viewRepository: Repository<View>);
    create(createViewDto: CreateViewDto): Promise<{
        status: number;
        success: boolean;
        message: any;
    }>;
    findAll(): Promise<View[] | {
        status: number;
        success: boolean;
        message: any;
    }>;
    findOne(id: number): Promise<View | {
        status: number;
        success: boolean;
        message: any;
    }>;
}
