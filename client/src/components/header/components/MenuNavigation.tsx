import Link from 'next/link';
import React from 'react';

import styles from '../styles/MenuNavigation.module.scss';

const MenuNavigation: React.FC = () => {

  return (
    <nav className={ styles.menu_navigation }>
      <ul className={ styles.links }>
        <li>Pesquisar</li>
        <li><Link href='/lancamentos'>Lançamentos</Link></li>
        <li><Link href='/mais-vendidos'>Mais vendidos</Link></li>
        <li><Link href='/categorias'>Categorias</Link></li>
        <li><Link href='/outlet'>OUTLET</Link></li>
      </ul>
    </nav>
  );
};

export default MenuNavigation;
