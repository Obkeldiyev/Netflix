import { PartialType } from '@nestjs/mapped-types';
import { CreateDislikeDto } from './create-dislike.dto';

export class UpdateDislikeDto extends PartialType(CreateDislikeDto) {}
