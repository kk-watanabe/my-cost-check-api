import { Controller, Get, Param } from '@nestjs/common';
import { CostService } from './cost.service';
import { Cost } from './cost.interface';

@Controller('cost')
export class CostController {
  constructor(private readonly costService: CostService) {}

  @Get()
  getAllCost(): Cost[] {
    return this.costService.getAllCost();
  }

  @Get(':id')
  getTest(@Param('id') id: number): Cost {
    return this.costService.getCost(id);
  }

  @Get('months')
  getMonths(): Date[] {
    return this.costService.getMonths();
  }

  @Get('cost-names')
  getCostNames(): string[] {
    return this.costService.getCostNames();
  }
}
