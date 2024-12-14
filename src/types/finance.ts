export interface FinancialData {
  monthlyIncome: number;
  expenses: {
    category: string;
    amount: number;
  }[];
  savings: number;
}

export interface SavingsPlan {
  category: string;
  percentage: number;
  amount: number;
  description: string;
}