import { IsNotEmpty, IsString } from "class-validator";

export class CreateAdminDto {
    @IsString()
    @IsNotEmpty()
    readonly full_name: string;
  
    @IsNotEmpty()
    @IsString()
    readonly login: string;

    @IsNotEmpty()
    @IsString()
    readonly password: string;
}
