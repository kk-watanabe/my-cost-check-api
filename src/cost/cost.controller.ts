import { Controller, Get, Param } from '@nestjs/common';
import { CostService } from './cost.service';
import { PaymentCost } from './cost.interface';

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

  @Get('months')
  getMonths(): Date[] {
    return this.costService.getMonths();
  }

  @Get('payment-cost-names')
  getPaymentCostNames(): string[] {
    return this.costService.getPaymentCostNames();
  }
}
