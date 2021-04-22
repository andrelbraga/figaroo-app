import { Test, TestingModule } from '@nestjs/testing';
import { employeController } from './employe.controller';
import { employeervice } from './employe.service';

describe('employeController', () => {
  let controller: employeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [employeController],
      providers: [employeervice],
    }).compile();

    controller = module.get<employeController>(employeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
