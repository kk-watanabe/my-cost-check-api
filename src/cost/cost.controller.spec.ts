import { Test, TestingModule } from '@nestjs/testing';
import { CostController } from './cost.controller';
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

describe('CostController', () => {
  let controller: CostController;
  let service: CostService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CostController],
      providers: [CostService],
    }).compile();

    controller = module.get<CostController>(CostController);
    service = module.get<CostService>(CostService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('call getAllCost', async () => {
    jest.spyOn(service, 'getAllCost').mockImplementation(() => COSTS);

    expect(await controller.getAllCost()).toBe(COSTS);
  });

  it('call getCost', async () => {
    const ID = 3;
    const COST = COSTS.find((cost) => cost.id === ID);

    jest.spyOn(service, 'getCost').mockImplementation(() => COST);

    expect(await controller.getCost(ID)).toBe(COST);
  });

  it('call getMonths', async () => {
    jest.spyOn(service, 'getMonths').mockImplementation(() => MONTHS);

    expect(await controller.getMonths()).toBe(MONTHS);
  });

  it('call getCostNames', async () => {
    jest.spyOn(service, 'getCostNames').mockImplementation(() => COST_NAMES);

    expect(await controller.getCostNames()).toBe(COST_NAMES);
  });
});
