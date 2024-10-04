import { PartialType } from '@nestjs/mapped-types';
import { CreateActorDto } from './create-actor.dto';
import { IsNotEmpty, IsNumber, IsString, Min } from 'class-validator';

export class UpdateActorDto extends PartialType(CreateActorDto) {
    @Min(0)
    @IsNumber()
    id: number

    @IsNotEmpty()
    @IsString()
    fullname: string

    @IsNotEmpty()
    @IsNumber()
    age: number

}
