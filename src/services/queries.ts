import { getStorageItem } from '@/utils/localStorage';
import { api } from '@/services/api';
import { getToken } from './api';
import { UserData } from '@/hooks/useAuth';

export const fetchUserMessagesById = async () => {
  try {
    const user = getStorageItem('user_data') as UserData;

    if (user) {
      const { data } = await api.get(`/messages/${user.id}`, {
        headers: {
          Authorization: getToken(),
        },
      });

      if (data.messages) {
        const { messages } = data;
        return messages;
      }

      return data;
    }
  } catch (error) {
    return error;
  }
};

export type FetchAllUsersResponse = {
  _id: string;
  name: string;
  email: string;
  credits: number;
  sms_refer: string;
  sms_key: string | null;
  createdAt: string;
  updatedAt: string;
  admin: boolean;
  avatar: string | null;
  __v: number;
}[];

export const fetchAllUsers = async () => {
  try {
    const { data } = await api.get(`/users`, {
      headers: {
        Authorization: getToken(),
      },
    });

    const { users } = data;

    return users;
  } catch (error) {
    return error;
  }
};
