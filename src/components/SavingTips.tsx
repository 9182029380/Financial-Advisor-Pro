import React from 'react';
import { Lightbulb } from 'lucide-react';

export function SavingTips() {
  const tips = [
    {
      title: "50/30/20 Rule",
      description: "Allocate 50% for needs, 30% for wants, and 20% for savings"
    },
    {
      title: "Automate Savings",
      description: "Set up automatic transfers to your savings account on payday"
    },
    {
      title: "Cut Unnecessary Subscriptions",
      description: "Review and cancel unused subscription services"
    },
    {
      title: "Energy Efficiency",
      description: "Reduce utility bills by using energy-efficient appliances"
    }
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center mb-6">
        <Lightbulb className="w-6 h-6 text-yellow-500 mr-2" />
        <h2 className="text-xl font-bold">Smart Saving Tips</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {tips.map((tip, index) => (
          <div key={index} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
            <h3 className="font-semibold text-lg mb-2">{tip.title}</h3>
            <p className="text-gray-600">{tip.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}