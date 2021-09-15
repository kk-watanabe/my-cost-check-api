import { Test, TestingModule } from '@nestjs/testing';
import { CostController } from './cost.controller';
import { CostService } from './cost.service';
import {
  PAYMENT_COSTS,
  MONTH_COSTS,
  MONTHS,
  PAYMENT_COST_NAMES,
} from './cost.mock';

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

  it('call getAllPaymentCosts', async () => {
    jest
      .spyOn(service, 'getAllPaymentCosts')
      .mockImplementation(() => PAYMENT_COSTS);

    expect(await controller.getAllPaymentCosts()).toBe(PAYMENT_COSTS);
  });

  it('call getPaymentCost', async () => {
    const ID = 3;
    const COST = PAYMENT_COSTS.find((cost) => cost.id === ID);

    jest.spyOn(service, 'getPaymentCost').mockImplementation(() => COST);

    expect(await controller.getPaymentCost(ID)).toBe(COST);
  });

  it('call getAllMonthConsts', async () => {
    jest
      .spyOn(service, 'getAllMonthConsts')
      .mockImplementation(() => MONTH_COSTS);

    expect(await controller.getAllMonthConsts()).toBe(MONTH_COSTS);
  });

  it('call getMonthConst', async () => {
    const DATE = '2021-08-01';
    const TARGET_DATE = new Date(DATE);
    const COST = MONTH_COSTS.find(
      (cost) => cost.date.getTime() === TARGET_DATE.getTime(),
    );

    jest.spyOn(service, 'getMonthConst').mockImplementation(() => COST);

    expect(await controller.getMonthConst(DATE)).toBe(COST);
  });

  it('call getMonths', async () => {
    jest.spyOn(service, 'getMonths').mockImplementation(() => MONTHS);

    expect(await controller.getMonths()).toBe(MONTHS);
  });

  it('call getPaymentCostNames', async () => {
    jest
      .spyOn(service, 'getPaymentCostNames')
      .mockImplementation(() => PAYMENT_COST_NAMES);

    expect(await controller.getPaymentCostNames()).toBe(PAYMENT_COST_NAMES);
  });
});
