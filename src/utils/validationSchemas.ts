import * as yup from 'yup';

export const loginSchema = yup
  .object()
  .shape({
    email: yup.string().email('E-mail inválido').required('E-mail obrigatório'),
    password: yup.string().min(6, 'Mínimo de 6 caracteres').required('Senha obrigatória'),
  })
  .required();

export const registerSchema = yup
  .object()
  .shape({
    name: yup.string().required('Nome obrigatório'),
    email: yup.string().email('E-mail inválido').required('E-mail obrigatório'),
    password: yup.string().min(6, 'Mínimo de 6 caracteres').required('Senha obrigatória'),
    confirm_password: yup
      .string()
      .oneOf(
        [yup.ref('password'), 'A confirmação deve ser igual à senha'],
        'A confirmação deve ser igual à senha'
      )
      .required('Confirmação de senha obrigatória'),
  })
  .required();

export const sendMessageSchema = yup
  .object()
  .shape({
    destination: yup
      .string()
      .min(10, 'Mínimo de 10 caracteres com DDD')
      .max(13, 'Máximo de 13 caracteres com DDD e DDI')
      .matches(/(^(55)?(\d{2})(\d{9})$)/g, 'Numero de celular inválido')
      .required('Número de celular obrigatório'),
    content: yup.string().max(200, '200 caracteres no máximo').required('Mensagem obrigatória'),
  })
  .required();

export const updateUserSchema = yup
  .object()
  .shape({
    name: yup.string().required('Nome obrigatório'),
    email: yup.string().email('E-mail inválido').required('E-mail obrigatório'),
    confirm_email: yup
      .string()
      .oneOf(
        [yup.ref('email'), 'A confirmação deve ser igual ao e-mail'],
        'A confirmação deve ser igual ao e-mail'
      ),
    new_password: yup
      .string()
      .transform((value) => value || null)
      .nullable()
      .min(6, 'Mínimo de 6 caracteres'),
    confirm_password: yup
      .string()
      .transform((value) => value || null)
      .nullable()
      .oneOf(
        [yup.ref('new_password'), 'A confirmação deve ser igual à senha'],
        'A confirmação deve ser igual à senha'
      ),
  })
  .required();

export const forgotPasswordSchema = yup
  .object()
  .shape({
    email: yup.string().email('E-mail inválido').required('E-mail obrigatório'),
  })
  .required();

export const newPasswordSchema = yup
  .object()
  .shape({
    password: yup.string().min(6, 'Mínimo de 6 caracteres').required(),
    confirm_password: yup
      .string()
      .oneOf(
        [yup.ref('password'), 'A confirmação deve ser igual à senha'],
        'A confirmação deve ser igual à senha'
      )
      .required(),
  })
  .required();
