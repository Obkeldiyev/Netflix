import { PartialType } from '@nestjs/mapped-types';
import { CreateDirectorDto } from './create-director.dto';
import { IsNotEmpty, IsNumber, IsString, Min } from 'class-validator';

export class UpdateDirectorDto extends PartialType(CreateDirectorDto) {
    @IsNotEmpty()
    @IsNumber()
    @Min(0)
    id: number 

    @IsNotEmpty()
    @IsString()
    fullname: string

    @IsNotEmpty()
    @IsNumber()
    age: number
}
