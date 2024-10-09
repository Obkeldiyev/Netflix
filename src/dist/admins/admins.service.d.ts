import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { Admin } from './entities/admin.entity';
import { Repository } from 'typeorm';
export declare class AdminsService {
    private readonly adminsRepository;
    constructor(adminsRepository: Repository<Admin>);
    create(createAdminDto: CreateAdminDto): Promise<{
        status: any;
        success: boolean;
        message: any;
    }>;
    findAll(): Promise<Admin[] | {
        success: boolean;
        status: number;
        message: any;
    }>;
    findOne(id: number): Promise<{
        success: boolean;
        data: Admin;
        status: number;
        message?: undefined;
    } | {
        success: boolean;
        status: number;
        message: any;
        data?: undefined;
    }>;
    update(id: number, updateAdminDto: UpdateAdminDto): Promise<{
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
