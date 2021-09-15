import {
  MonthAmount,
  PaymentCost,
  PaymentAmount,
  MonthConst,
} from './cost.interface';

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

const PAYMENT_AMOUNTS: PaymentAmount[] = [
  {
    id: 1,
    name: 'cost1',
    amount: 10000,
  },
  {
    id: 2,
    name: 'cost2',
    amount: 5000,
  },
  {
    id: 3,
    name: 'cost3',
    amount: 3000,
  },
  {
    id: 4,
    name: 'cost4',
    amount: 4000,
  },
];

export const MONTH_COSTS: MonthConst[] = [
  { date: new Date('2020-4-22'), total: 22000, amounts: PAYMENT_AMOUNTS },
  { date: new Date('2020-4-23'), total: 22000, amounts: PAYMENT_AMOUNTS },
  { date: new Date('2020-4-24'), total: 22000, amounts: PAYMENT_AMOUNTS },
];

export const MONTHS: Date[] = PAYMENT_COSTS[0].amounts.map(
  (amount) => amount.date,
);

export const PAYMENT_COST_NAMES: string[] = PAYMENT_COSTS.map(
  (cost) => cost.name,
);
