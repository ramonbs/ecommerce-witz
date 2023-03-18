import { login } from '@app/reducers/user';
import Footer from '@components/footer';
import Header from '@components/header';
import { verifyToken } from '@services/api/user';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styles from './styles.module.scss';

interface LayoutProps {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  const dispatch = useDispatch();

  useEffect(() => {
    verifyUserToken();
  }, []);

  const verifyUserToken = async () => {
    try {
      const token = localStorage.getItem('token');
      await verifyToken( token || '');
      dispatch(login());
    } catch (error) {
      return error;
    }
  };

  return (
    <div className={ styles.main_layout }>
      <Header />
      <main>{ children }</main>
      <Footer />
    </div>
  );
}
