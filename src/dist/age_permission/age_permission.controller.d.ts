import { AgePermissionService } from './age_permission.service';
import { CreateAgePermissionDto } from './dto/create-age_permission.dto';
import { UpdateAgePermissionDto } from './dto/update-age_permission.dto';
export declare class AgePermissionController {
    private readonly agePermissionService;
    constructor(agePermissionService: AgePermissionService);
    create(createAgePermissionDto: CreateAgePermissionDto): Promise<{
        status: number;
        success: boolean;
        message: any;
    }>;
    findAll(): Promise<import("./entities/age_permission.entity").AgePermission[] | {
        status: number;
        success: boolean;
        message: any;
    }>;
    findOne(id: string): Promise<import("./entities/age_permission.entity").AgePermission | {
        status: number;
        success: boolean;
        message: any;
    }>;
    update(id: string, updateAgePermissionDto: UpdateAgePermissionDto): Promise<{
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
