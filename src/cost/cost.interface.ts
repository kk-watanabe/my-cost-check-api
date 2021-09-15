export interface MonthAmount {
  date: Date;
  amount: number;
}

export interface PaymentCost {
  id: number;
  name: string;
  amounts: MonthAmount[];
}

export interface PaymentAmount {
  id: number;
  name: string;
  amount: number;
}

export interface MonthConst {
  date: Date;
  total: number;
  amounts: PaymentAmount[];
}
