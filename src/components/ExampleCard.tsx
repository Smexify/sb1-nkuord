import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { SolutionModal } from './SolutionModal';
import { solutions } from '../data/solutions';
import { InteractiveInput } from './InteractiveInput';

interface ExampleCardProps {
  title: string;
  subject: string;
  difficulty: 'Легкий' | 'Средний' | 'Сложный';
  description: string;
}

export function ExampleCard({ title, subject, difficulty, description }: ExampleCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [values, setValues] = useState<Record<string, number>>({});

  const difficultyColor = {
    'Легкий': 'bg-green-100 text-green-800',
    'Средний': 'bg-yellow-100 text-yellow-800',
    'Сложный': 'bg-red-100 text-red-800'
  }[difficulty];

  const solution = solutions[title as keyof typeof solutions];
  const inputFields = solution?.inputs || [];

  const handleValueChange = (field: string, value: number) => {
    setValues(prev => ({ ...prev, [field]: value }));
  };

  return (
    <>
      <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition p-6">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
            <p className="text-sm text-gray-500 mt-1">{subject}</p>
          </div>
          <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${difficultyColor}`}>
            {difficulty}
          </span>
        </div>
        <p className="mt-4 text-gray-600">{description}</p>
        
        {inputFields.length > 0 && (
          <div className="mt-4 space-y-3">
            {inputFields.map(field => (
              <InteractiveInput
                key={field.name}
                label={field.label}
                value={values[field.name] || 0}
                onChange={(value) => handleValueChange(field.name, value)}
              />
            ))}
          </div>
        )}

        <button 
          onClick={() => setIsModalOpen(true)}
          className="mt-4 flex items-center text-indigo-600 hover:text-indigo-700 text-sm font-medium"
          disabled={!solution}
        >
          {solution ? 'Смотреть Решение' : 'Скоро Будет'}
          <ArrowRight className="ml-2 h-4 w-4" />
        </button>
      </div>

      {solution && (
        <SolutionModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          solution={solution}
          values={values}
        />
      )}
    </>
  );
}