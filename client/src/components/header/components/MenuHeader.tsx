import { Iuser, login } from '@app/reducers/user';
import Link from 'next/link';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styles from '../styles/MenuHeader.module.scss';

const MenuHeader: React.FC = () => {
  const { isAuthed } = useSelector((state: Iuser) => state.user);
  const dispatch = useDispatch();

  return (
    <header className={ styles.menu_header }>

      { !isAuthed && (
        <div className={ styles.authentication }>
          <Link href='/auth/login' onClick={ () => dispatch(login()) }>Entrar</Link>
          <Link href='/auth/register'>Cadastrar</Link>
        </div>
      ) }

      { isAuthed && (
        <>
          <Link
            href='/profile'
            className={ styles.profile }
          >
            Perfil
          </Link>

          <Link href='/cart' className={ styles.cart }>Carrinho</Link>
        </>
      ) }


    </header>
  );
};

export default MenuHeader;
