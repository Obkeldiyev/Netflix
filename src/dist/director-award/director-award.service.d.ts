import { CreateDirectorAwardDto } from './dto/create-director-award.dto';
import { UpdateDirectorAwardDto } from './dto/update-director-award.dto';
export declare class DirectorAwardService {
    create(createDirectorAwardDto: CreateDirectorAwardDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateDirectorAwardDto: UpdateDirectorAwardDto): string;
    remove(id: number): string;
}
