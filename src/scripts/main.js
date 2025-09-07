'use strict';

// write your code here
document.addEventListener('DOMContentLoaded', () => {
  const spans = document.querySelectorAll('.population');
  console.log(spans);
  const value = Array.from(spans).map(span => span.textContent.trim());
  console.log(value);
  let r = 0; // Сумма
  let validCount = 0; // Счётчик валидных чисел

  for (let i = 0; i < value.length; i++) {
    const cleanValue = value[i].replace(/,/g, '');
    const parsed = Number(cleanValue); // Преобразуем в число
    if (Number.isFinite(parsed)) {
      r += parsed;
      validCount++;
      console.log(`Добавлено: ${parsed}, Текущая сумма: ${r}, Валидных значений: ${validCount}`);
    } else {
      console.log(`Пропущено некорректное значение: ${value[i]}`);
    }
  }

  const totalElement = document.querySelector('.total-population');
  if (totalElement) {
    totalElement.textContent = r.toLocaleString('en-US');
  } else {
    console.log('Элемент с классом .total-population не найден');
  }

  const averageElement = document.querySelector('.average-population');
  if (averageElement) {
    const average = validCount > 0 ? Math.floor(r / validCount) : 0; // Избегаем деления на 0
    averageElement.textContent = average.toLocaleString('en-US');
  } else {
    console.log('Элемент с классом .average-population не найден');
  }
});
