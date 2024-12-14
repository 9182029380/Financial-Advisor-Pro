import React from 'react';
import { DollarSign, TrendingUp, Wallet } from 'lucide-react';
import { FinancialData } from '../types/finance';

interface Props {
  data: FinancialData;
}

export function MonthlyOverview({ data }: Props) {
  const totalExpenses = data.expenses.reduce((sum, exp) => sum + exp.amount, 0);
  const remainingBudget = data.monthlyIncome - totalExpenses;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center mb-4">
          <DollarSign className="w-6 h-6 text-green-500 mr-2" />
          <h3 className="text-lg font-semibold">Monthly Income</h3>
        </div>
        <p className="text-2xl font-bold text-green-600">${data.monthlyIncome.toLocaleString()}</p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center mb-4">
          <Wallet className="w-6 h-6 text-red-500 mr-2" />
          <h3 className="text-lg font-semibold">Total Expenses</h3>
        </div>
        <p className="text-2xl font-bold text-red-600">${totalExpenses.toLocaleString()}</p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center mb-4">
          <TrendingUp className="w-6 h-6 text-blue-500 mr-2" />
          <h3 className="text-lg font-semibold">Remaining Budget</h3>
        </div>
        <p className="text-2xl font-bold text-blue-600">${remainingBudget.toLocaleString()}</p>
      </div>
    </div>
  );
}