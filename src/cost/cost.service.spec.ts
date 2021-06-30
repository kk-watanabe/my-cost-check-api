import { Test, TestingModule } from '@nestjs/testing';
import { CostService } from './cost.service';
import { COSTS, MONTHS, COST_NAMES } from './cost.mock';

jest.mock('stein-js-client', () => {
  return jest.fn().mockImplementation(() => {
    return {
      read: jest.fn().mockImplementation(() => {
        return {
          then: jest.fn(),
        };
      }),
    };
  });
});

describe('CostService', () => {
  let service: CostService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CostService],
    }).compile();

    service = module.get<CostService>(CostService);

    Object.defineProperty(service, 'costs', {
      value: COSTS,
    });

    Object.defineProperty(service, 'months', {
      value: MONTHS,
    });

    Object.defineProperty(service, 'costNames', {
      value: COST_NAMES,
    });
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('call getAllCost', () => {
    expect(service.getAllCost()).toEqual(COSTS);
  });

  it('call getCost', () => {
    const ID = 3;
    const COST = COSTS.find((cost) => cost.id === ID);
    expect(service.getCost(ID)).toEqual(COST);
  });

  it('call getMonths', () => {
    expect(service.getMonths()).toEqual(MONTHS);
  });

  it('call getCostNames', () => {
    expect(service.getCostNames()).toEqual(COST_NAMES);
  });
});
