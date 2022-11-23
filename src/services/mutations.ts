import { UserData } from '@/hooks/useAuth';
import { api } from '@/services/api';
import { getToken } from './api';

export type ErrorProps = {
  message: string;
  stack: string;
};

type SendMessageData = {
  destination: string;
  content: string;
};

export const sendMessage = async (data: SendMessageData) => {
  try {
    const { data: response_data } = await api.post('/messages/send', data, {
      headers: {
        Authorization: getToken(),
      },
    });
    return response_data;
  } catch (error) {
    return error;
  }
};

type LoginData = {
  email: string;
  password: string;
};

export type LoginResponse = {
  token: string;
  user: UserData;
};

export const login = async (data: LoginData) => {
  try {
    const { data: login_data } = await api.post('/session', data);

    return { ...login_data };
  } catch (error) {
    return error;
  }
};

type RegisterUserData = {
  name: string;
  email: string;
  password: string;
  confirm_password: string;
};

export type RegisterUserResponse = {
  _id: string;
  avatar: string;
  name: string;
  email: string;
  credits: number;
  sms_refer: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export const registerUser = async (data: RegisterUserData) => {
  try {
    const { data: register_data } = await api.post('/users', data);
    const { message } = register_data;
    return message;
  } catch (error) {
    return error;
  }
};

export type EditUserData = {
  sms_key: string;
  credits: string;
  user_id?: string | null;
};

export type EditUserResponse = {
  _id: string;
  name: string;
  email: string;
  credits: number;
  sms_refer: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export const editUser = async (data: EditUserData) => {
  try {
    const { credits, sms_key, user_id } = data;

    const { data: edit_user_data } = await api.patch(
      `/customers/${user_id}`,
      { credits, sms_key },
      {
        headers: {
          Authorization: getToken(),
        },
      }
    );

    const { customer } = edit_user_data;

    return customer;
  } catch (error) {
    return error;
  }
};

export type DeleteUserData = {
  user_id?: string;
};

export const deleteUser = async (data: DeleteUserData) => {
  try {
    const { user_id } = data;
    await api.delete(`/users/${user_id}`, {
      headers: {
        Authorization: getToken(),
      },
    });
  } catch (error) {
    return error;
  }
};

export type EditProfileData = {
  name?: string;
  email?: string;
  new_password?: string;
  confirm_password?: string;
  user_id: string;
};

export type EditProfileResponse = {
  user: {
    _id: string;
    name: string;
    email: string;
    admin: boolean;
    avatar: string | null;
    credits: number;
    createdAt: string;
    updatedAt: string;
    __v: number;
  };
};

export const editProfile = async ({
  name,
  email,
  new_password,
  confirm_password,
  user_id,
}: EditProfileData) => {
  try {
    const { data } = await api.put(
      `/users/${user_id}`,
      { name, email, new_password, confirm_password },
      {
        headers: {
          Authorization: getToken(),
        },
      }
    );

    return data;
  } catch (error) {
    return error;
  }
};
