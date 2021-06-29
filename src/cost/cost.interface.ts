export interface Amount {
  date: Date;
  amount: number;
}

export interface Cost {
  id: number;
  name: string;
  amounts: Amount[];
}
