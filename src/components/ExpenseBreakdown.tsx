import React from 'react';
import { PieChart, Receipt } from 'lucide-react';
import { FinancialData } from '../types/finance';

interface Props {
  data: FinancialData;
}

export function ExpenseBreakdown({ data }: Props) {
  const totalExpenses = data.expenses.reduce((sum, exp) => sum + exp.amount, 0);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-8">
      <div className="flex items-center mb-6">
        <Receipt className="w-6 h-6 text-purple-500 mr-2" />
        <h2 className="text-xl font-bold">Expense Breakdown</h2>
      </div>
      
      <div className="space-y-4">
        {data.expenses.map((expense, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center">
              <PieChart className="w-5 h-5 text-gray-500 mr-2" />
              <span className="font-medium">{expense.category}</span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-gray-600">${expense.amount.toLocaleString()}</span>
              <div className="w-24 bg-gray-200 rounded-full h-2">
                <div
                  className="bg-purple-500 rounded-full h-2"
                  style={{ width: `${(expense.amount / totalExpenses) * 100}%` }}
                ></div>
              </div>
              <span className="text-sm text-gray-500">
                {((expense.amount / totalExpenses) * 100).toFixed(1)}%
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}