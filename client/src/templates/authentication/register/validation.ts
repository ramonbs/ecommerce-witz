import { object, ref, string } from 'yup';

export const registerValidationSchema = object({
  name: string()
    .min(3, 'O nome precisa ter pelo menos 3 caracteres!')
    .required('Nome é obrigatório!'),
  surname: string()
    .min(3, 'O sobrenome precisa ter pelo menos 3 caracteres!')
    .required('Sobrenome é obrigatório!'),
  email: string()
    .email('O email precisa ser válido!')
    .required('Email é obrigatório!'),
  password: string()
    .min(6, 'A senha precisa ter pelo menos 6 caracteres!')
    .required('Senha é obrigatória!'),
  confirmPassword: string()
    .oneOf([ref('password')], 'As senhas precisam ser iguais!')
    .required('Confirmação de senha é obrigatória!'),
});
