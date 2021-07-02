import { Test, TestingModule } from '@nestjs/testing';
import { TitheService } from './tithe.service';

describe('TitheService', () => {
  let service: TitheService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TitheService],
    }).compile();

    service = module.get<TitheService>(TitheService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
