import { Module } from '@nestjs/common';
import { ExternalPersonService } from './external-person.service';
import { ExternalPersonController } from './external-person.controller';

@Module({
  controllers: [ExternalPersonController],
  providers: [ExternalPersonService]
})
export class ExternalPersonModule {}
