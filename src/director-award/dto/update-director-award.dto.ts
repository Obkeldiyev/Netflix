import { PartialType } from '@nestjs/mapped-types';
import { CreateDirectorAwardDto } from './create-director-award.dto';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class UpdateDirectorAwardDto extends PartialType(CreateDirectorAwardDto) {
    @IsNumber()
    @IsNotEmpty()
    id: number
    
    @IsNumber()
    director_id :number
    film_id: number
    award_id: number
}
