import { IsNotEmpty, IsNumber, IsString } from "class-validator"

export class CreateAwardDto {
    @IsString()
    @IsNotEmpty()
    name: string

    @IsNumber()
    @IsNotEmpty()
    year_taken:number
}
