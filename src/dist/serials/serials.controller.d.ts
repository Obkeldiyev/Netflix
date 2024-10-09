import { SerialsService } from './serials.service';
import { CreateSerialDto } from './dto/create-serial.dto';
import { UpdateSerialDto } from './dto/update-serial.dto';
export declare class SerialsController {
    private readonly serialsService;
    constructor(serialsService: SerialsService);
    create(createSerialDto: CreateSerialDto): Promise<{
        status: number;
        success: boolean;
        message: any;
    }>;
    findAll(): Promise<import("./entities/serial.entity").Serial[] | {
        status: number;
        success: boolean;
        message: any;
    }>;
    findOne(id: string): Promise<import("./entities/serial.entity").Serial | {
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
