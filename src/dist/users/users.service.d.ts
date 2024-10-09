import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
export declare class UsersService {
    private readonly usersRepository;
    constructor(usersRepository: Repository<User>);
    create(createUserDto: CreateUserDto): Promise<{
        status: number;
        success: boolean;
        message: any;
    }>;
    findAll(): Promise<User[] | {
        status: number;
        message: any;
        success: boolean;
    }>;
    findOne(id: number): Promise<User | {
        success: boolean;
        status: number;
        message: any;
    }>;
    update(id: number, updateUserDto: UpdateUserDto): Promise<{
        success: boolean;
        message: string;
        status?: undefined;
    } | {
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
