import { Iuser } from '@app/reducers/user';
import Container from '@components/container';
import React from 'react';
import { useSelector } from 'react-redux';
import Actions from './components/Actions';
import Authentication from './components/Authentication';
import Logo from './components/Logo';
import MenuIcon from './components/MenuIcon';
import MenuOverlay from './components/MenuOverlay';
import Navigation from './components/Navigation';

import styles from './styles/Header.module.scss';

const Header: React.FC = () => {
  const { isAuthed } = useSelector((state: Iuser) => state.user);

  return (
    <header>
      <div className={ styles.wrapper }>
        <Container>
          <header className={ styles.header }>
            <Logo />
            <Navigation />

            { isAuthed ? <Actions /> : <Authentication /> }

            <MenuIcon />
          </header>
        </Container>
      </div>

      <MenuOverlay />
    </header>
  );
};

export default Header;
