import { Layout } from '@components/layout';
import Modal from '@components/modal';
import Link from 'next/link';
import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { registerUser } from '../../../services/api/user';
import Button from '../components/Button';
import Input from '../components/Input';
import { registerValidationSchema } from './validation';

import { AxiosError } from 'axios';
import styles from './Register.module.scss';

const inputsState = {
  name: '',
  surname: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const RegisterTemplate: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inputs, setInputs] = useState(inputsState);

  /**
   * Handle input change event
   * @param event - Input change event
   */
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = event;
    setInputs({ ...inputs, [name]: value });
  };

  /**
   * Validate inputs and register user if valid
   * Otherwise, show error message
   */
  const handleRegister = async () => {
    try {
      const data = await registerValidationSchema.validate(inputs);

      const objectToBackEnd = {
        email: data.email,
        password: data.password,
        name: data.name,
        lastName: data.surname,
      };

      await registerUser(objectToBackEnd);

      toast.success('Cadastro efetuado com sucesso!');

      setIsModalOpen(true);

      setInputs(inputsState);
    } catch (error) {
      if (error instanceof AxiosError) return toast.error(error.response?.data.message);
      if (error instanceof Error) toast.error(error.message);
    }
  };

  return (
    <>
      <Modal isModalOpen={ isModalOpen }>
        <div className={ styles.modal }>
          <p>Um email de confirmação de cadastro foi enviado, para acessar a sua conta, você precisa confirma-lo.</p>

          <Button text='Continuar' onClick={ () => setIsModalOpen(false) } />
        </div>
      </Modal>

      <ToastContainer autoClose={ 2000 } />

      <Layout>
        <section className={ styles.wrapper }>
          <div className={ styles.register }>
            <h3>Cadastrar</h3>

            <label htmlFor='name'>
              <p>Nome<span>*</span></p>
              <Input
                type='text'
                name='name'
                value={ inputs.name }
                id='name'
                placeholder='Autentica'
                onChange={ handleChange }
              />
            </label>

            <label htmlFor='surname'>
              <p>Sobrenome<span>*</span></p>
              <Input
                type='text'
                name='surname'
                value={ inputs.surname }
                id='surname'
                placeholder='Store'
                onChange={ handleChange }
              />
            </label>

            <label htmlFor='email'>
              <p>Email<span>*</span></p>
              <Input
                type='email'
                name='email'
                value={ inputs.email }
                id='email'
                placeholder='exemplo@email.com'
                onChange={ handleChange }
              />
            </label>

            <label htmlFor='password'>
              <p>Senha<span>*</span></p>
              <Input
                type='password'
                name='password'
                value={ inputs.password }
                id='password'
                placeholder='********'
                onChange={ handleChange }
              />
            </label>

            <label htmlFor='confirmPassword'>
              <p>Confirmar senha<span>*</span></p>

              <Input
                type='password'
                name='confirmPassword'
                value={ inputs.confirmPassword }
                id='confirmPassword'
                placeholder='********'
                onChange={ handleChange }
              />
            </label>

            <p className={ styles.required }>* Campo obrigatório</p>

            <Button text='Cadastrar' onClick={ handleRegister } />
          </div>

          <Link href='/auth/login'>Já tem uma conta? Faça login</Link>
        </section>
      </Layout>
    </>
  );
};

export default RegisterTemplate;
