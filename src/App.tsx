import React, { useState } from 'react';
import { FinancialData } from './types/finance';
import { MonthlyOverview } from './components/MonthlyOverview';
import { ExpenseBreakdown } from './components/ExpenseBreakdown';
import { SavingsPlanComponent } from './components/SavingsPlan';
import { SavingTips } from './components/SavingTips';
import { FinanceForm } from './components/FinanceForm';
import { Coins } from 'lucide-react';

function App() {
  const [financialData, setFinancialData] = useState<FinancialData | null>(null);

  const handleFinancialDataSubmit = (data: FinancialData) => {
    setFinancialData(data);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-center mb-8">
          <Coins className="w-8 h-8 text-blue-500 mr-2" />
          <h1 className="text-3xl font-bold text-center">Financial Advisor Pro</h1>
        </div>

        <FinanceForm onSubmit={handleFinancialDataSubmit} />

        {financialData && (
          <div className="space-y-8">
            <MonthlyOverview data={financialData} />
            <ExpenseBreakdown data={financialData} />
            <SavingsPlanComponent monthlyIncome={financialData.monthlyIncome} />
            <SavingTips />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;