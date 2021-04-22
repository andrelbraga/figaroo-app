import { Test, TestingModule } from '@nestjs/testing';
import { employeervice } from './employe.service';

describe('employeervice', () => {
  let service: employeervice;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [employeervice],
    }).compile();

    service = module.get<employeervice>(employeervice);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
