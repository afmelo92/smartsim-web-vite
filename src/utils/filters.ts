export const onlyNumbers = (text: string) => text.replace(/[\D]/, '');

// export const onlyCellphone = (text) => text.replace(//)

export const normalizeStr = (str: string) =>
  typeof str === 'string' && str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

export const formatPrice = (number: number) =>
  new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    maximumFractionDigits: 2,
  }).format(number);

export const formatDate = (date: string) =>
  new Intl.DateTimeFormat('pt-BR', {
    dateStyle: 'short',
    timeStyle: 'medium',
  }).format(new Date(date));
