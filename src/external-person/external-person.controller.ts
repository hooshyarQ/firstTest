import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ExternalPersonService } from './external-person.service';
import { CreateExternalPersonDto } from './dto/create-external-person.dto';
import { UpdateExternalPersonDto } from './dto/update-external-person.dto';

@Controller('external-person')
export class ExternalPersonController {
  constructor(private readonly externalPersonService: ExternalPersonService) {}

  @Post()
  create(@Body() createExternalPersonDto: CreateExternalPersonDto) {
    return this.externalPersonService.create(createExternalPersonDto);
  }

  @Get()
  findAll() {
    return this.externalPersonService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.externalPersonService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateExternalPersonDto: UpdateExternalPersonDto) {
    return this.externalPersonService.update(+id, updateExternalPersonDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.externalPersonService.remove(+id);
  }
}
