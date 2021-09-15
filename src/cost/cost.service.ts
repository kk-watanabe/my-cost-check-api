import { Injectable } from '@nestjs/common';
import {
  MonthAmount,
  PaymentCost,
  PaymentAmount,
  MonthConst,
} from './cost.interface';
import SteinStore = require('stein-js-client');

@Injectable()
export class CostService {
  private paymentCosts: PaymentCost[] = [];
  private months: Date[] = [];
  private paymentCostNames: string[] = [];
  private monthConsts: MonthConst[] = [];

  constructor() {
    const store = new SteinStore(process.env.STEIN_STORE_URL);

    store.read(process.env.STEIN_STORE_MAIN_SHEET_NAME).then((datas) => {
      const saveMonthConsts: MonthConst[] = [];
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

            const paymentAmount: PaymentAmount = {
              id: Number(data.id),
              name: costName,
              amount,
            };

            saveMonthConsts.push({ date, total: 0, amounts: [paymentAmount] });

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

      this.monthConsts = this.months.map((m) => {
        const reuslts = saveMonthConsts.filter(
          (c) => c.date.getTime() === m.getTime(),
        );
        const amounts = reuslts.map((reuslt) => reuslt.amounts[0]);
        const total = amounts.reduce((sum, amount) => sum + amount.amount, 0);

        return {
          date: m,
          total,
          amounts,
        };
      });
    });
  }

  getAllPaymentCosts(): PaymentCost[] {
    return this.paymentCosts;
  }

  getPaymentCost(id: number): PaymentCost {
    return this.paymentCosts.find((cost) => cost.id === id);
  }

  getAllMonthConsts(): MonthConst[] {
    return this.monthConsts;
  }

  getMonthConst(date: Date): MonthConst {
    return this.monthConsts.find(
      (cost) => cost.date.getTime() === date.getTime(),
    );
  }

  getMonths(): Date[] {
    return this.months;
  }

  getPaymentCostNames(): string[] {
    return this.paymentCostNames;
  }
}
