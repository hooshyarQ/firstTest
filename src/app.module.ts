import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ExternalPersonModule } from './external-person/external-person.module';

@Module({
  imports: [ExternalPersonModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
