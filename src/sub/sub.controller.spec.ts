import { Test, TestingModule } from '@nestjs/testing';
import { SubController } from './sub.controller';
import { SubService } from './sub.service';

describe('SubController', () => {
  let controller: SubController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SubController],
      providers: [SubService],
    }).compile();

    controller = module.get<SubController>(SubController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
