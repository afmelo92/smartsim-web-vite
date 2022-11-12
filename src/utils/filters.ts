export const onlyNumbers = (text: string) => text.replace(/[\D]/, '');

// export const onlyCellphone = (text) => text.replace(//)

export const normalizeStr = (str: string) =>
  typeof str === 'string' && str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
