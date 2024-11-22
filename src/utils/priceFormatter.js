export const priceFormatter = (value) => {
  const numericValue = String(value).replace(/\D/g, '');

  const length = numericValue.length;
  const cents = length > 2 ? numericValue.slice(-2) : numericValue.padStart(2, '0');
  const reais = numericValue.slice(0, length - 2);

  const formattedValue = `R$ ${reais.replace(/\B(?=(\d{3})+(?!\d))/g, '.')},${cents}`;

  return formattedValue;
};