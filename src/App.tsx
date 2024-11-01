import React, { useState } from 'react';
import { Header } from './components/Header';
import { SubjectFilter } from './components/SubjectFilter';
import { ExampleCard } from './components/ExampleCard';
import { examples } from './data/examples';

function App() {
  const [selectedSubject, setSelectedSubject] = useState('Все Предметы');

  const filteredExamples = examples.filter(example => 
    selectedSubject === 'Все Предметы' || example.subject === selectedSubject
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Учебные Примеры</h1>
          <p className="text-gray-600 max-w-3xl">
            Найдите подробные решения и объяснения распространенных учебных задач. 
            Используйте фильтры по предметам и уровню сложности, чтобы найти именно то, что вам нужно.
          </p>
        </div>

        <SubjectFilter 
          selectedSubject={selectedSubject} 
          onSubjectChange={setSelectedSubject} 
        />

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredExamples.map((example) => (
            <ExampleCard
              key={example.title}
              title={example.title}
              subject={example.subject}
              difficulty={example.difficulty}
              description={example.description}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;