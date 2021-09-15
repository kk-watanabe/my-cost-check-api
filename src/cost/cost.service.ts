import { Injectable } from '@nestjs/common';
import { MonthAmount, PaymentCost } from './cost.interface';
import SteinStore = require('stein-js-client');

@Injectable()
export class CostService {
  private paymentCosts: PaymentCost[] = [];
  private months: Date[] = [];
  private paymentCostNames: string[] = [];

  constructor() {
    const store = new SteinStore(process.env.STEIN_STORE_URL);

    store.read(process.env.STEIN_STORE_MAIN_SHEET_NAME).then((datas) => {
      const result: PaymentCost[] = datas.map((data) => {
        const keys = Object.keys(data);
        const amounts: MonthAmount[] = [];
        const costName = data.credit_card;

        this.paymentCostNames.push(costName);

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

      this.paymentCosts = result;
      console.log(this.paymentCosts);
    });
  }

  getAllPaymentCosts(): PaymentCost[] {
    return this.paymentCosts;
  }

  getPaymentCost(id: number): PaymentCost {
    return this.paymentCosts.find((cost) => cost.id === id);
  }

  getMonths(): Date[] {
    return this.months;
  }

  getPaymentCostNames(): string[] {
    return this.paymentCostNames;
  }
}
