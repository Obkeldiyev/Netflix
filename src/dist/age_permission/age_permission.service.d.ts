import { CreateAgePermissionDto } from './dto/create-age_permission.dto';
import { UpdateAgePermissionDto } from './dto/update-age_permission.dto';
import { AgePermission } from './entities/age_permission.entity';
import { Repository } from 'typeorm';
export declare class AgePermissionService {
    private readonly agePermissionRepository;
    constructor(agePermissionRepository: Repository<AgePermission>);
    create(createAgePermissionDto: CreateAgePermissionDto): Promise<{
        status: number;
        success: boolean;
        message: any;
    }>;
    findAll(): Promise<AgePermission[] | {
        status: number;
        success: boolean;
        message: any;
    }>;
    findOne(id: number): Promise<AgePermission | {
        status: number;
        success: boolean;
        message: any;
    }>;
    update(id: number, updateAgePermissionDto: UpdateAgePermissionDto): Promise<{
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
