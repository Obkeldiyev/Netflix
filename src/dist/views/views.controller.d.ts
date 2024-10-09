import { ViewsService } from './views.service';
import { CreateViewDto } from './dto/create-view.dto';
export declare class ViewsController {
    private readonly viewsService;
    constructor(viewsService: ViewsService);
    create(createViewDto: CreateViewDto): Promise<{
        status: number;
        success: boolean;
        message: any;
    }>;
    findAll(): Promise<import("./entities/view.entity").View[] | {
        status: number;
        success: boolean;
        message: any;
    }>;
    findOne(id: string): Promise<import("./entities/view.entity").View | {
        status: number;
        success: boolean;
        message: any;
    }>;
}
