import React from 'react';

export const solutions = {
  'Квадратные Уравнения': {
    title: 'Решение Квадратных Уравнений',
    inputs: [
      { name: 'a', label: 'Значение a' },
      { name: 'b', label: 'Значение b' },
      { name: 'c', label: 'Значение c' }
    ],
    content: (
      <>
        <p className="mb-4">
          Квадратное уравнение - это уравнение вида ax² + bx + c = 0, где a, b и c являются константами, и a ≠ 0.
        </p>
        <div className="bg-gray-50 p-4 rounded-lg mb-4">
          <p className="font-mono text-center">x = (-b ± √(b² - 4ac)) / (2a)</p>
        </div>
      </>
    ),
    calculate: (values: Record<string, number>) => {
      const { a, b, c } = values;
      if (!a) return <p className="text-red-600">Значение 'a' не может быть равно 0</p>;

      const discriminant = b * b - 4 * a * c;
      const x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
      const x2 = (-b - Math.sqrt(discriminant)) / (2 * a);

      if (discriminant < 0) {
        return <p>Уравнение не имеет действительных корней (D {'<'} 0)</p>;
      }

      return (
        <div className="space-y-2">
          <p>Для уравнения: {a}x² + {b}x + {c} = 0</p>
          <p>Дискриминант (D) = {discriminant}</p>
          {discriminant === 0 ? (
            <p>x = {x1.toFixed(2)}</p>
          ) : (
            <>
              <p>x₁ = {x1.toFixed(2)}</p>
              <p>x₂ = {x2.toFixed(2)}</p>
            </>
          )}
        </div>
      );
    },
    steps: [
      "Определите значения a, b и c в вашем квадратном уравнении",
      "Проверьте, можно ли решить уравнение методом разложения на множители",
      "Если нет, подставьте значения в квадратную формулу",
      "Сначала вычислите дискриминант (b² - 4ac)",
      "Завершите вычисление формулы, чтобы найти оба решения"
    ]
  },

  'Производные Функций': {
    title: 'Вычисление Производных',
    inputs: [
      { name: 'x', label: 'Значение x' }
    ],
    content: (
      <>
        <p className="mb-4">
          Производная функции f(x) в точке x определяет скорость изменения функции в этой точке.
        </p>
        <div className="bg-gray-50 p-4 rounded-lg mb-4">
          <p className="font-mono text-center">f'(x) = lim[h→0] (f(x+h) - f(x))/h</p>
        </div>
      </>
    ),
    calculate: (values: Record<string, number>) => {
      const { x } = values;
      const fx = Math.pow(x, 2); // f(x) = x²
      const fpx = 2 * x; // f'(x) = 2x

      return (
        <div className="space-y-2">
          <p>Для функции f(x) = x²:</p>
          <p>f({x}) = {fx}</p>
          <p>f'({x}) = {fpx}</p>
        </div>
      );
    },
    steps: [
      "Определите тип функции",
      "Примените соответствующее правило дифференцирования",
      "Упростите полученное выражение",
      "Проверьте результат"
    ]
  },

  'Законы Движения Ньютона': {
    title: 'Понимание Законов Движения Ньютона',
    inputs: [
      { name: 'mass', label: 'Масса (кг)' },
      { name: 'acceleration', label: 'Ускорение (м/с²)' }
    ],
    content: (
      <>
        <p className="mb-4">
          Три закона движения Ньютона - это фундаментальные принципы механики.
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Первый Закон: Закон инерции</li>
          <li>Второй Закон: F = ma</li>
          <li>Третий Закон: Действие равно противодействию</li>
        </ul>
      </>
    ),
    calculate: (values: Record<string, number>) => {
      const { mass, acceleration } = values;
      const force = mass * acceleration;

      return (
        <div className="space-y-2">
          <p>По второму закону Ньютона:</p>
          <p>F = ma</p>
          <p>F = {mass} кг × {acceleration} м/с²</p>
          <p className="font-semibold">Результирующая сила: {force.toFixed(2)} Н</p>
        </div>
      );
    },
    steps: [
      "Определите все действующие силы",
      "Примените второй закон Ньютона",
      "Учтите третий закон при необходимости",
      "Решите полученное уравнение"
    ]
  },

  'Расчет Молярной Массы': {
    title: 'Вычисление Молярной Массы',
    inputs: [
      { name: 'atoms', label: 'Количество атомов' },
      { name: 'atomicMass', label: 'Атомная масса' }
    ],
    content: (
      <>
        <p className="mb-4">
          Молярная масса - это масса одного моля вещества, выраженная в граммах на моль (г/моль).
        </p>
        <div className="bg-gray-50 p-4 rounded-lg mb-4">
          <p className="font-mono text-center">M = m × N</p>
        </div>
      </>
    ),
    calculate: (values: Record<string, number>) => {
      const { atoms, atomicMass } = values;
      const molarMass = atoms * atomicMass;

      return (
        <div className="space-y-2">
          <p>Расчет молярной массы:</p>
          <p>M = {atoms} × {atomicMass} г/моль</p>
          <p className="font-semibold">Молярная масса: {molarMass.toFixed(2)} г/моль</p>
        </div>
      );
    },
    steps: [
      "Определите количество атомов каждого элемента",
      "Умножьте на соответствующую атомную массу",
      "Сложите все значения",
      "Проверьте единицы измерения"
    ]
  }
} as const;