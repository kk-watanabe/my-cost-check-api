import { Injectable } from '@nestjs/common';
import { Amount, Cost } from './cost.interface';
import SteinStore = require('stein-js-client');

@Injectable()
export class CostService {
  private costs: Cost[] = [];
  private months: Date[] = [];
  private costNames: string[] = [];

  constructor() {
    const store = new SteinStore(process.env.STEIN_STORE_URL);
    store.read(process.env.STEIN_STORE_MAIN_SHEET_NAME).then((datas) => {
      const result: Cost[] = datas.map((data) => {
        const keys = Object.keys(data);
        const amounts: Amount[] = [];
        const costName = data.credit_card;

        this.costNames.push(costName);

        keys.forEach((key) => {
          if (key.match('/')) {
            const dateData = key.split('/');
            const date = new Date(Number(dateData[0]), Number(dateData[1]));
            const amount = Number(data[key].replace(/,/g, ''));

            this.months.push(date);

            amounts.push({
              date,
              amount,
            });
          }
        });

        return {
          id: Number(data.id),
          name: costName,
          amounts: amounts,
        };
      });

      this.costs = result;
    });
  }

  getAllCost(): Cost[] {
    return this.costs;
  }

  getCost(id: number): Cost {
    return this.costs.find((cost) => cost.id === id);
  }

  getMonths(): Date[] {
    return this.months;
  }

  getCostNames(): string[] {
    return this.costNames;
  }
}
