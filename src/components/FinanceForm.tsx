import React, { useState } from 'react';
import { Calculator } from 'lucide-react';
import { FinancialData } from '../types/finance';

interface Props {
  onSubmit: (data: FinancialData) => void;
}

export function FinanceForm({ onSubmit }: Props) {
  const [monthlyIncome, setMonthlyIncome] = useState('');
  const [expenses, setExpenses] = useState([
    { category: 'Housing', amount: '' },
    { category: 'Transportation', amount: '' },
    { category: 'Food', amount: '' },
    { category: 'Utilities', amount: '' },
    { category: 'Healthcare', amount: '' }
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formattedExpenses = expenses.map(exp => ({
      category: exp.category,
      amount: Number(exp.amount) || 0
    }));

    onSubmit({
      monthlyIncome: Number(monthlyIncome),
      expenses: formattedExpenses,
      savings: 0
    });
  };

  const handleExpenseChange = (index: number, amount: string) => {
    const newExpenses = [...expenses];
    newExpenses[index] = { ...newExpenses[index], amount };
    setExpenses(newExpenses);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md mb-8">
      <div className="flex items-center mb-6">
        <Calculator className="w-6 h-6 text-blue-500 mr-2" />
        <h2 className="text-xl font-bold">Enter Your Financial Information</h2>
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Monthly Income
        </label>
        <input
          type="number"
          value={monthlyIncome}
          onChange={(e) => setMonthlyIncome(e.target.value)}
          className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-4">Monthly Expenses</h3>
        {expenses.map((expense, index) => (
          <div key={index} className="flex gap-4 mb-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {expense.category}
              </label>
              <input
                type="number"
                value={expense.amount}
                onChange={(e) => handleExpenseChange(index, e.target.value)}
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>
        ))}
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
      >
        Calculate Financial Overview
      </button>
    </form>
  );
}