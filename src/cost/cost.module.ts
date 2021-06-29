import { Module } from '@nestjs/common';
import { CostService } from './cost.service';
import { CostController } from './cost.controller';

@Module({
  providers: [CostService],
  controllers: [CostController],
})
export class CostModule {}
