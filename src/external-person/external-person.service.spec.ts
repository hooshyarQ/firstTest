import { Test, TestingModule } from '@nestjs/testing';
import { ExternalPersonService } from './external-person.service';

describe('ExternalPersonService', () => {
  let service: ExternalPersonService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExternalPersonService],
    }).compile();

    service = module.get<ExternalPersonService>(ExternalPersonService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
