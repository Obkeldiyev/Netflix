import { CreateSerialDto } from './dto/create-serial.dto';
import { UpdateSerialDto } from './dto/update-serial.dto';
import { Serial } from './entities/serial.entity';
import { Repository } from 'typeorm';
export declare class SerialsService {
    private readonly serialRepository;
    constructor(serialRepository: Repository<Serial>);
    create(createSerialDto: CreateSerialDto): Promise<{
        status: number;
        success: boolean;
        message: any;
    }>;
    findAll(): Promise<Serial[] | {
        status: number;
        success: boolean;
        message: any;
    }>;
    findOne(id: string): Promise<Serial | {
        status: number;
        success: boolean;
        message: any;
    }>;
    update(id: string, updateSerialDto: UpdateSerialDto): Promise<{
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
