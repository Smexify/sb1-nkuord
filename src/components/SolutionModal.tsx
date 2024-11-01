import React from 'react';
import { X } from 'lucide-react';

interface SolutionModalProps {
  isOpen: boolean;
  onClose: () => void;
  solution: {
    title: string;
    content: React.ReactNode;
    steps: string[];
    calculate?: (values: Record<string, number>) => React.ReactNode;
    inputs?: Array<{ name: string; label: string }>;
  };
  values: Record<string, number>;
}

export function SolutionModal({ isOpen, onClose, solution, values }: SolutionModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-screen items-center justify-center p-4">
        <div className="fixed inset-0 bg-black bg-opacity-25 transition-opacity" onClick={onClose} />
        
        <div className="relative w-full max-w-4xl bg-white rounded-lg shadow-xl">
          <div className="flex items-center justify-between p-4 border-b">
            <h3 className="text-xl font-semibold text-gray-900">{solution.title}</h3>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-500"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          
          <div className="p-6">
            <div className="prose max-w-none">
              {solution.content}
              
              {solution.calculate && (
                <div className="mt-6 p-4 bg-indigo-50 rounded-lg">
                  <h4 className="text-lg font-medium mb-2">Решение с вашими значениями:</h4>
                  {solution.calculate(values)}
                </div>
              )}
            </div>
            
            <div className="mt-6">
              <h4 className="font-medium text-lg mb-4">Пошаговое Решение:</h4>
              <ol className="space-y-4">
                {solution.steps.map((step, index) => (
                  <li key={index} className="flex gap-4">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-sm font-medium">
                      {index + 1}
                    </span>
                    <span className="text-gray-600">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}