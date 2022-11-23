import { getStorageItem, setStorageItem } from '@/utils/localStorage';
import React, { createContext, useEffect, useContext, useState } from 'react';

const USER_KEY = 'user_data';

export type UserData = {
  admin: boolean;
  avatar: string | null;
  credits: number;
  email: string;
  id: string;
  name: string;
};

export type UserContextData = {
  user: UserData;
  clearData: () => void;
  saveData: (data: UserData) => void;
};

const userDefaultData = {
  admin: false,
  avatar: '',
  credits: 0,
  email: '',
  id: '',
  name: '',
};

export const UserContextDefaultValues = {
  user: userDefaultData,
  clearData: () => null,
  saveData: () => null,
};

export const UserContext = createContext<UserContextData>(UserContextDefaultValues);

export type UserProviderProps = {
  children: React.ReactNode;
};

const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useState<UserData>(userDefaultData);

  useEffect(() => {
    const data = getStorageItem(USER_KEY) as UserData;

    if (data) {
      setUser(data);
    }
  }, []);

  const saveData = (data: UserData) => {
    setUser(data);
    setStorageItem(USER_KEY, data);
  };

  const clearData = () => {
    saveData(userDefaultData);
  };

  return (
    <UserContext.Provider value={{ user, clearData, saveData }}>{children}</UserContext.Provider>
  );
};

const useAuth = () => useContext(UserContext);

export { UserProvider, useAuth };
