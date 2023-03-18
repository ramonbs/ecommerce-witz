import { Imenu, toggleMenu } from '@app/reducers/menu';
import React from 'react';
import { IoClose, IoMenu } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import useOnResize from '../hooks/useOnResize';

import styles from '../styles/MenuIcon.module.scss';

const MenuIcon: React.FC = () => {
  const { isOpen}  = useSelector((state: Imenu) => state.menu);
  const dispatch = useDispatch();

  useOnResize({});

  return (
    <div
      className={ styles.menu_icon }
      onClick={ () => dispatch(toggleMenu()) }
    >
      { isOpen ? <IoClose /> : <IoMenu /> }
    </div>
  );
};

export default MenuIcon;
