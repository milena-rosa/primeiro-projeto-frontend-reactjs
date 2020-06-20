const formatValue = (value: number): string =>
  Intl.NumberFormat('pt-BR', {
    style: 'currency',
    maximumFractionDigits: 2,
    currency: 'BRL',
  }).format(value); // TODO

export default formatValue;
