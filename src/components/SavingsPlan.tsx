import React from 'react';
import { PiggyBank } from 'lucide-react';
import { SavingsPlan } from '../types/finance';

interface Props {
  monthlyIncome: number;
}

export function SavingsPlanComponent({ monthlyIncome }: Props) {
  const suggestedPlans: SavingsPlan[] = [
    {
      category: "Emergency Fund",
      percentage: 20,
      amount: monthlyIncome * 0.2,
      description: "Build 3-6 months of living expenses"
    },
    {
      category: "Retirement",
      percentage: 15,
      amount: monthlyIncome * 0.15,
      description: "Long-term investment for future"
    },
    {
      category: "Short-term Goals",
      percentage: 10,
      amount: monthlyIncome * 0.1,
      description: "Vacation, home improvements, etc."
    }
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-8">
      <div className="flex items-center mb-6">
        <PiggyBank className="w-6 h-6 text-green-500 mr-2" />
        <h2 className="text-xl font-bold">Suggested Savings Plan</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {suggestedPlans.map((plan, index) => (
          <div key={index} className="border rounded-lg p-4">
            <h3 className="font-semibold text-lg mb-2">{plan.category}</h3>
            <div className="text-2xl font-bold text-green-600 mb-2">
              ${plan.amount.toLocaleString()}
            </div>
            <p className="text-gray-600 text-sm">{plan.description}</p>
            <div className="mt-2 text-sm text-gray-500">
              {plan.percentage}% of income
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}