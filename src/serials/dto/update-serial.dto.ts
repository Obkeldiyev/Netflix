import { PartialType } from '@nestjs/mapped-types';
import { CreateSerialDto } from './create-serial.dto';

export class UpdateSerialDto extends PartialType(CreateSerialDto) {}
