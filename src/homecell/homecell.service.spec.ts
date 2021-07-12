import { Test, TestingModule } from '@nestjs/testing';
import { HomecellService } from './homecell.service';

describe('HomecellService', () => {
  let service: HomecellService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HomecellService],
    }).compile();

    service = module.get<HomecellService>(HomecellService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
