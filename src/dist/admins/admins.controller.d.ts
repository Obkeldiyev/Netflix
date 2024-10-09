import { AdminsService } from './admins.service';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
export declare class AdminsController {
    private readonly adminsService;
    constructor(adminsService: AdminsService);
    create(createAdminDto: CreateAdminDto): Promise<{
        status: any;
        success: boolean;
        message: any;
    }>;
    findAll(): Promise<import("./entities/admin.entity").Admin[] | {
        success: boolean;
        status: number;
        message: any;
    }>;
    findOne(id: string): Promise<{
        success: boolean;
        data: import("./entities/admin.entity").Admin;
        status: number;
        message?: undefined;
    } | {
        success: boolean;
        status: number;
        message: any;
        data?: undefined;
    }>;
    update(id: string, updateAdminDto: UpdateAdminDto): Promise<{
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
