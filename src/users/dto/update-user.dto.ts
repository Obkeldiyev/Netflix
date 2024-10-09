import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

import { Optional } from '@nestjs/common';
import { IsNotEmpty, IsNumber, IsString, Min } from 'class-validator';

export class UpdateUserDto {
  @IsString()
  @IsNotEmpty()
  @Optional()
  readonly first_name: string;

  @IsString()
  @IsNotEmpty()
  @Optional()
  readonly last_name: string;

  @IsNotEmpty()
  @IsString()
  @Optional()
  readonly login: string;

  @IsNumber()
  @Min(0)
  @Optional()
  readonly age: number;

  @IsNumber()
  @Min(1)
  @Optional()
  readonly country_id: number;
  username: any;
}
