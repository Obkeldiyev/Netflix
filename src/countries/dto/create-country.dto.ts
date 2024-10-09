import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateCountryDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  continent_id: number;
}
