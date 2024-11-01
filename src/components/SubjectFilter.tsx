import React from 'react';

const subjects = [
  'Все Предметы',
  'Математика',
  'Физика',
  'Химия',
  'Биология',
  'Информатика'
] as const;

interface SubjectFilterProps {
  selectedSubject: string;
  onSubjectChange: (subject: string) => void;
}

export function SubjectFilter({ selectedSubject, onSubjectChange }: SubjectFilterProps) {
  return (
    <div className="flex space-x-2 overflow-x-auto pb-2">
      {subjects.map((subject) => (
        <button
          key={subject}
          onClick={() => onSubjectChange(subject)}
          className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors
            ${subject === selectedSubject
              ? 'bg-indigo-600 text-white' 
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
        >
          {subject}
        </button>
      ))}
    </div>
  );
}