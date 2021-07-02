import { Test, TestingModule } from '@nestjs/testing';
import { TitheController } from './tithe.controller';
import { TitheService } from './tithe.service';

describe('TitheController', () => {
  let controller: TitheController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TitheController],
      providers: [TitheService],
    }).compile();

    controller = module.get<TitheController>(TitheController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
