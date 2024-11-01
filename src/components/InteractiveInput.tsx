import React from 'react';

interface InteractiveInputProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
}

export function InteractiveInput({ label, value, onChange }: InteractiveInputProps) {
  return (
    <div className="flex items-center space-x-4">
      <label className="text-sm font-medium text-gray-700 min-w-[100px]">{label}:</label>
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value) || 0)}
        className="w-24 px-3 py-1.5 border rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
      />
    </div>
  );
}