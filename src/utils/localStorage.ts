const APP_KEY = 'SMARTSIM';

export function getStorageItem(key: string): unknown {
  if (typeof window === 'undefined') return;

  const data = window.localStorage.getItem(`${APP_KEY}_${key}`);

  return JSON.parse(data!);
}

export function setStorageItem(key: string, value: unknown) {
  if (typeof window === 'undefined') return;

  const data = JSON.stringify(value);

  return window.localStorage.setItem(`${APP_KEY}_${key}`, data);
}
