import { isNotEmpty, IsNotEmpty, IsNumber, isNumber, IsString } from "class-validator";

export class CreateActorDto {
    @IsNotEmpty()
    @IsString()
    fullname: string

    @IsNotEmpty()
    @IsNumber()
    age: number
}
