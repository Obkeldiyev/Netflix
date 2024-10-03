import { PartialType } from '@nestjs/mapped-types';
import { CreateAgePermissionDto } from './create-age_permission.dto';

export class UpdateAgePermissionDto extends PartialType(CreateAgePermissionDto) {}
