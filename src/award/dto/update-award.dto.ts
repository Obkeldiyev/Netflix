import { PartialType } from '@nestjs/mapped-types';
import { CreateAwardDto } from './create-award.dto';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class UpdateAwardDto extends PartialType(CreateAwardDto) {
    @IsNotEmpty()
    @IsNumber()
    id: number

    @IsString()
    @IsNotEmpty()
    name: string

    @IsNumber()
    @IsNotEmpty()
    year_taken:number
}
