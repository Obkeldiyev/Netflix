import { PartialType } from '@nestjs/mapped-types';
import { CreateCountryDto } from './create-country.dto';
import { IsNotEmpty, IsNumber, IsString, Min } from 'class-validator';
import { Optional } from '@nestjs/common';

export class UpdateCountryDto extends PartialType(CreateCountryDto) {
  @IsNotEmpty()
  @IsString()
  @Optional()
  name: string;

  @IsNumber()
  @Min(1)
  @Optional()
  continent_id: number;
}
