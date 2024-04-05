export function formattedCurrency(num) {
  return num.toLocaleString('ru-RU', {
    style: 'currency',
    currency: 'RUB',
    minimumFractionDigits: 0,
  });
}
