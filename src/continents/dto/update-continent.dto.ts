import { PartialType } from '@nestjs/mapped-types';
import { CreateContinentDto } from './create-continent.dto';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateContinentDto extends PartialType(CreateContinentDto) {
  @IsString()
  @IsNotEmpty()
  name: string;
}
