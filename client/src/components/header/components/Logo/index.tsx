import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import logo from '@assets/autentica_logo.svg';
import styles from './Logo.module.scss';

const Logo: React.FC = () => {
  return (
    <Link href='/'>
      <Image
        src={ logo }
        alt='logo autentica store'
        className={ styles.logo }
      />
    </Link>
  );
};

export default Logo;
