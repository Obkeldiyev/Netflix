import { DirectorAwardService } from './director-award.service';
import { CreateDirectorAwardDto } from './dto/create-director-award.dto';
import { UpdateDirectorAwardDto } from './dto/update-director-award.dto';
export declare class DirectorAwardController {
    private readonly directorAwardService;
    constructor(directorAwardService: DirectorAwardService);
    create(createDirectorAwardDto: CreateDirectorAwardDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateDirectorAwardDto: UpdateDirectorAwardDto): string;
    remove(id: string): string;
}
