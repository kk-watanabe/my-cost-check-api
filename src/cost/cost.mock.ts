import { MonthAmount, PaymentCost } from './cost.interface';

const MONTH_AMOUNTS: MonthAmount[] = [
  { date: new Date('2020-4-22'), amount: 10000 },
  { date: new Date('2020-4-23'), amount: 9000 },
  { date: new Date('2020-4-24'), amount: 8000 },
  { date: new Date('2020-4-25'), amount: 12000 },
];

export const PAYMENT_COSTS: PaymentCost[] = [
  { id: 1, name: 'cost1', amounts: MONTH_AMOUNTS },
  { id: 2, name: 'cost2', amounts: MONTH_AMOUNTS },
  { id: 3, name: 'cost3', amounts: MONTH_AMOUNTS },
];

export const MONTHS: Date[] = PAYMENT_COSTS[0].amounts.map(
  (amount) => amount.date,
);

export const PAYMENT_COST_NAMES: string[] = PAYMENT_COSTS.map(
  (cost) => cost.name,
);
