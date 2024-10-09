import { IsString } from 'class-validator';

export class CreateAdminDto {
  @IsString()
  full_name: string;

  @IsString()
  username: string;

  @IsString()
  password: string;
}
