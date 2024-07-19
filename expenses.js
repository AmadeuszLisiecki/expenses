const fullExpenses = {
  "2023-01": {
    "01": {
      "food": [22.11, 43, 11.72, 2.2, 36.29, 2.5, 19],
      "fuel": [210.22]
    },
    "09": {
      "food": [11.9],
      "fuel": [190.22]
    }
  },
  "2023-03": {
    "07": {
      "food": [20, 11.9, 30.20, 11.9]
    },
    "04": {
      "food": [10.20, 11.50, 2.5],
      "fuel": []
    }
  },
  "2023-04": {}
};

function solution(expenses) {
  const totalExpenses = [];

  for (const monthKey in expenses) {
    const month = expenses[monthKey];
    const firstDayInMonth = new Date(`${monthKey}-01`).getDay();
    const validDaysCount = firstDayInMonth === 0 ? 1 : 8 - firstDayInMonth;

    for (let i = 1; i <= validDaysCount; i++) {
      const day = month[`0${i}`];

      for (const categoryKey in day) {
        const category = day[categoryKey];
        const correctNumbers = category.filter(
          value => !isNaN(value) && typeof value === 'number'
        );

        if (correctNumbers.length) {
          totalExpenses.push(...correctNumbers);
        }
      }
    }
  }

  const totalExpensesLength = totalExpenses.length;

  if (totalExpensesLength === 0) {
    return null;
  }

  totalExpenses.sort((e1, e2) => e1 - e2);

  const middleIndex = totalExpensesLength / 2;

  if (totalExpensesLength % 2 === 0) {
    const middleLeftElement = totalExpenses[middleIndex - 1];
    const middleRightElement = totalExpenses[middleIndex]

    return (middleLeftElement + middleRightElement) / 2;
  }

  return totalExpenses[Math.floor(middleIndex)];
}

console.log(solution(fullExpenses));
