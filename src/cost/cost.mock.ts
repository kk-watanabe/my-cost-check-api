import { Amount, Cost } from './cost.interface';

const AMOUNTS: Amount[] = [
  { date: new Date('2020-4-22'), amount: 10000 },
  { date: new Date('2020-4-23'), amount: 9000 },
  { date: new Date('2020-4-24'), amount: 8000 },
  { date: new Date('2020-4-25'), amount: 12000 },
];

export const COSTS: Cost[] = [
  { id: 1, name: 'cost1', amounts: AMOUNTS },
  { id: 2, name: 'cost2', amounts: AMOUNTS },
  { id: 3, name: 'cost3', amounts: AMOUNTS },
];

export const MONTHS: Date[] = COSTS[0].amounts.map((amount) => amount.date);
export const COST_NAMES: string[] = COSTS.map((cost) => cost.name);
