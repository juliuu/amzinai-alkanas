import { useCallback, useState, useEffect } from 'react';

export const useSessionStorage = (key, defaultValue) => {
  return useStorage(key, defaultValue, window.sessionStorage);
};

export const useLocalStorage = (key, defaultValue) => {
  return useStorage(key, defaultValue, window.localStorage);
};

const useStorage = (key, defaultValue, storage) => {
  const [value, setValue] = useState(() => {
    const jsonValue = storage.getItem(key);
    if (jsonValue != null) return JSON.parse(jsonValue);

    if (typeof defaultValue === 'function') return defaultValue();
    else return defaultValue;
  });

  useEffect(() => {
    if (value === undefined) return storage.removeItem(key);
    storage.setItem(key, JSON.stringify(value));
  }, [key, value, storage]);

  const remove = useCallback(() => {
    setValue(undefined);
  }, []);

  return [value, setValue, remove];
};
