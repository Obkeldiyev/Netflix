import { IsNotEmpty, IsNumber, IsString, Min } from "class-validator";

export class CreateCountryDto {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNumber()
    @Min(1)
    continent_id: number;
}
