import { PartialType } from '@nestjs/mapped-types';
import { CreateExternalPersonDto } from './create-external-person.dto';

export class UpdateExternalPersonDto extends PartialType(CreateExternalPersonDto) {}
