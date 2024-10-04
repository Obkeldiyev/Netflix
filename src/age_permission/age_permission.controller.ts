import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AgePermissionService } from './age_permission.service';
import { CreateAgePermissionDto } from './dto/create-age_permission.dto';
import { UpdateAgePermissionDto } from './dto/update-age_permission.dto';

@Controller('age-permission')
export class AgePermissionController {
  constructor(private readonly agePermissionService: AgePermissionService) {}

  @Post()
  create(@Body() createAgePermissionDto: CreateAgePermissionDto) {
    return this.agePermissionService.create(createAgePermissionDto);
  }

  @Get()
  findAll() {
    return this.agePermissionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.agePermissionService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAgePermissionDto: UpdateAgePermissionDto,
  ) {
    return this.agePermissionService.update(+id, updateAgePermissionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.agePermissionService.remove(+id);
  }
}
