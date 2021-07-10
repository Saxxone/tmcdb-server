import { Test, TestingModule } from '@nestjs/testing';
import { FellowshipController } from './fellowship.controller';
import { FellowshipService } from './fellowship.service';

describe('FellowshipController', () => {
  let controller: FellowshipController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FellowshipController],
      providers: [FellowshipService],
    }).compile();

    controller = module.get<FellowshipController>(FellowshipController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
