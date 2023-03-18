import { closeMenu, Imenu } from '@app/reducers/menu';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styles from '../styles/MenuOverlay.module.scss';
import MenuHeader from './MenuHeader';
import MenuNavigation from './MenuNavigation';

const MenuOverlay: React.FC = () => {
  const { isOpen } = useSelector((state: Imenu) => state.menu);
  const { query } = useRouter();
  const dispatch = useDispatch();

  const open = {
    top: `${0 + 131}px`,
    opacity: 1,
    zIndex: 999,
  };

  const close = {
    top: '-100%',
    opacity: 0,
    zIndex: -999,
    visibility: 'hidden',
  };

  useEffect(() => {
    dispatch(closeMenu());
  }, [query]);

  return (
    <div
      className={ styles.menu_overlay }
      style={ isOpen ? open : close }
    >
      <MenuHeader />

      <MenuNavigation />
    </div>
  );
};

export default MenuOverlay;
