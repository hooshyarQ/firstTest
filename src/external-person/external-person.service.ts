import { Injectable } from '@nestjs/common';
import { CreateExternalPersonDto } from './dto/create-external-person.dto';
import { UpdateExternalPersonDto } from './dto/update-external-person.dto';

@Injectable()
export class ExternalPersonService {
  create(createExternalPersonDto: CreateExternalPersonDto) {
    return 'This action adds a new externalPerson';
  }

  findAll() {
    return `This action returns all externalPerson`;
  }

  findOne(id: number) {
    return `This action returns a #${id} externalPerson`;
  }

  update(id: number, updateExternalPersonDto: UpdateExternalPersonDto) {
    return `This action updates a #${id} externalPerson`;
  }

  remove(id: number) {
    return `This action removes a #${id} externalPerson`;
  }
}
