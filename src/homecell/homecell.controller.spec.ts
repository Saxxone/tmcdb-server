import { Test, TestingModule } from '@nestjs/testing';
import { HomecellController } from './homecell.controller';
import { HomecellService } from './homecell.service';

describe('HomecellController', () => {
  let controller: HomecellController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HomecellController],
      providers: [HomecellService],
    }).compile();

    controller = module.get<HomecellController>(HomecellController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
