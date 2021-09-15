export interface MonthAmount {
  date: Date;
  amount: number;
}

export interface PaymentCost {
  id: number;
  name: string;
  amounts: MonthAmount[];
}

export interface MonthCost {
  id: number;
  name: string;
  amounts: MonthAmount[];
}

export interface MonthCost {
  id: number;
  name: string;
  amounts: MonthAmount[];
}
