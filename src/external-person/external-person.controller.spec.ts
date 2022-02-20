import { Test, TestingModule } from '@nestjs/testing';
import { ExternalPersonController } from './external-person.controller';
import { ExternalPersonService } from './external-person.service';

describe('ExternalPersonController', () => {
  let controller: ExternalPersonController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExternalPersonController],
      providers: [ExternalPersonService],
    }).compile();

    controller = module.get<ExternalPersonController>(ExternalPersonController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
