import { useRouter } from 'next/router';
import React from 'react';

import styles from '../styles/Authentication.module.scss';

const Authentication: React.FC = () => {
  const router = useRouter();

  const onAuth = (type: 'login' | 'register') => {
    router.push(`/auth/${type}`);
  };

  return (
    <div className={ styles.authentication }>
      <button
        className={ styles.login }
        onClick={ () => onAuth('login') }
      >
        Entrar
      </button>

      <button
        className={ styles.register }
        onClick={ () => onAuth('register') }
      >
        Cadastrar
      </button>
    </div>
  );
};

export default Authentication;
