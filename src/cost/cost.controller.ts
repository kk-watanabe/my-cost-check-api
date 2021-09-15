import { Controller, Get, Param } from '@nestjs/common';
import { CostService } from './cost.service';
import { PaymentCost, MonthConst } from './cost.interface';

@Controller('cost')
export class CostController {
  constructor(private readonly costService: CostService) {}

  @Get()
  getAllPaymentCosts(): PaymentCost[] {
    return this.costService.getAllPaymentCosts();
  }

  @Get(':id')
  getPaymentCost(@Param('id') id: number): PaymentCost {
    return this.costService.getPaymentCost(id);
  }

  @Get('all-month-consts')
  getAllMonthConsts(): MonthConst[] {
    return this.costService.getAllMonthConsts();
  }

  @Get('all-month-consts:date')
  getMonthConst(@Param('date') date: string): MonthConst {
    const targetDate = new Date(date);
    return this.costService.getMonthConst(targetDate);
  }

  @Get('months')
  getMonths(): Date[] {
    return this.costService.getMonths();
  }

  @Get('payment-cost-names')
  getPaymentCostNames(): string[] {
    return this.costService.getPaymentCostNames();
  }
}
