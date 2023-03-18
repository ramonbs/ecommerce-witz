import { login } from '@app/reducers/user';
import Container from '@components/container';
import { Layout } from '@components/layout';
import { loginUser } from '@services/api/user';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from '../components/Button';
import Input from '../components/Input';

import styles from './Login.module.scss';

const LoginTemplate: React.FC = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  /**
   * @description Handles the login process and redirects the user to the home page
   * @returns null
   */
  const onAuth = async () => {
    if (email.trim() === '' || password.trim() === '') {
      toast.error('Preencha todos os campos!');
      return;
    }

    try {
      const res = await loginUser({email, password});
      localStorage.setItem('token', res.token);
      dispatch(login());

      toast.success('Login efetuado com sucesso!', {
        autoClose: 1000,
      });

      const timer = setTimeout(() => {
        router.push('/');
        clearTimeout(timer);
      }, 2000);

    } catch (e) {
      toast.error('Credenciais inválidas!');
    } finally {
      setEmail('');
      setPassword('');
    }
  };

  return (
    <Layout>
      <Container>
        <>
          <ToastContainer autoClose={ 2000 } />

          <section className={ styles.wrapper }>
            <div className={ styles.login }>
              <h3>Entrar</h3>

              <label htmlFor='email'>
                Email
                <Input
                  onChange={ handleEmailChange }
                  onEnterKeyPress={ onAuth }
                  type='email'
                  name='email'
                  id='email'
                  placeholder='exemplo@email.com'
                />
              </label>

              <label htmlFor='password'>
                Senha
                <Input
                  onChange={ handlePasswordChange }
                  onEnterKeyPress={ onAuth }
                  type='password'
                  name='password'
                  id='password'
                  placeholder='********'
                />
              </label>


              <div className={ styles.controls }>
                <label
                  htmlFor='remember'
                  className={ styles.remember }
                >
                  <input type='checkbox' name='rember' id='remember' />
                  Lembrar-me
                </label>

                <Link href='/auth/register'>Recuperar senha</Link>
              </div>

              <Button
                text='Entrar'
                onClick={ onAuth }
              />
            </div>

            <Link href='/auth/register'>Não tem uma conta? Cadastre-se</Link>
          </section>
        </>
      </Container>
    </Layout>
  );
};

export default LoginTemplate;
