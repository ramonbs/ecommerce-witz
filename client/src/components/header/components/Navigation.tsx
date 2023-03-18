import Link from 'next/link';
import React from 'react';
import { IoSearch } from 'react-icons/io5';

import styles from '../styles/Navigation.module.scss';

const Navigation: React.FC = () => {
  return (
    <nav className={ styles.navigation }>
      <ul className={ styles.links }>
        <li><Link href='/lancamentos'>Lançamentos</Link></li>
        <li><Link href='/mais-vendidos'>Mais vendidos</Link></li>
        <li><Link href='/categorias'>Categorias</Link></li>
        <li><Link href='/outlet'>OUTLET</Link></li>
        <IoSearch className={ styles.search } />
      </ul>
    </nav>
  );
};

export default Navigation;
