import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(createUserDto: CreateUserDto): Promise<{
        status: number;
        success: boolean;
        message: any;
    }>;
    findAll(): Promise<import("./entities/user.entity").User[] | {
        status: number;
        message: any;
        success: boolean;
    }>;
    findOne(id: string): Promise<import("./entities/user.entity").User | {
        success: boolean;
        status: number;
        message: any;
    }>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<{
        success: boolean;
        message: string;
        status?: undefined;
    } | {
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
