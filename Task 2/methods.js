// my function methods
function displayMyFavouriteWords() {
  return 'Hello World';
}
function multiplyAndHalve(a, b) {
  return (a * b) / 2;
}

const methodCategoryArray = [
  {
    title: 'String Methods',
    id: 'string-methods-body',
    methods: [
      {
        operation: "'Jacob Booth'.toUpperCase()",
        output: 'Jacob Booth'.toUpperCase(),
      },
      {
        operation: "'Jacob Booth'.toLowerCase()",
        output: 'Jacob Booth'.toLowerCase(),
      },
      {
        operation: "' Jacob Booth '.trim()",
        output: ' Jacob Booth '.trim(),
      },
      {
        operation: "'Jacob Booth'.charAt(0)",
        output: 'Jacob Booth'.charAt(0),
      },
      {
        operation: "'Jacob Booth'.replace('H', 'J')",
        output: 'Jacob Booth'.replace('H', 'J'),
      },
    ],
  },
  {
    title: 'Number Methods',
    id: 'number-methods-body',
    methods: [
      {
        operation: '(456.789).toFixed(2)',
        output: (456.789).toFixed(2),
      },
      {
        operation: 'Math.round(456.789)',
        output: Math.round(456.789),
      },
      {
        operation: 'Math.floor(456.789)',
        output: Math.floor(456.789),
      },
      {
        operation: 'Math.ceil(456.789)',
        output: Math.ceil(456.789),
      },
      {
        operation: 'Math.sqrt(10000)',
        output: Math.sqrt(10000),
      },
    ],
  },
  {
    title: 'Array Methods',
    id: 'array-methods-body',
    methods: [
      {
        operation: '[1, 2, 3].push(4)',
        output: [1, 2, 3].push(4),
      },
      {
        operation: '[1, 2, 3, 4].pop()',
        output: [1, 2, 3, 4].pop(),
      },
      {
        operation: "['mars', 'moon', 'star'].join(', ')",
        output: ['mars', 'moon', 'star'].join(', '),
      },
      {
        operation: '[true, false].reverse()',
        output: [true, false].reverse(),
      },
      {
        operation: '[3, 2, 1].sort()',
        output: [3, 2, 1].sort(),
      },
    ],
  },
  {
    title: 'Date Methods',
    id: 'date-methods-body',
    methods: [
      {
        operation: 'new Date().getFullYear()',
        output: new Date().getFullYear(),
      },
      {
        operation: 'new Date().getMonth()',
        output: new Date().getMonth(),
      },
      {
        operation: 'new Date().getDate()',
        output: new Date().getDate(),
      },
      {
        operation: 'new Date().getDay()',
        output: new Date().getDay(),
      },
      {
        operation: 'new Date().getHours()',
        output: new Date().getHours(),
      },
    ],
  },
  {
    title: 'Function Methods',
    id: 'function-methods-body',
    methods: [
      {
        operation: 'displayMyFavouriteWords();',
        output: displayMyFavouriteWords(),
      },
      {
        operation: 'multiplyAndHalve(4, 6);',
        output: multiplyAndHalve(4, 6),
      },
    ],
  },
];

function populateTables() {
  methodCategoryArray.forEach((category) => {
    const tbody = document.getElementById(category.id);

    category.methods.forEach((method) => {
      const row = document.createElement('tr');

      const operationCell = document.createElement('td');
      operationCell.textContent = method.operation;
      row.appendChild(operationCell);

      const outputCell = document.createElement('td');
      outputCell.textContent = method.output;
      row.appendChild(outputCell);

      tbody.appendChild(row);
    });
  });
}

document.addEventListener('DOMContentLoaded', populateTables);
