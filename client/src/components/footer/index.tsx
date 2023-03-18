import Container from '@components/container';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Title from './components/Title';

import logo from '@assets/autentica_logo.svg';
import styles from './Footer.module.scss';

const Footer: React.FC = () => {
  return (
    <footer className={ styles.wrapper }>
      <Container>
        <section className={ styles.footer }>
          <div>
            <Link href='/'>
              <Image
                src={ logo }
                alt='logo autentica store'
                className={ styles.logo }
              />
            </Link>

            <ul>
              <li>
                <a href='http://instagram.com' target='_blank' rel='noreferrer'>
                  Instagram
                </a>
              </li>

              <li>
                <a href='http://facebook.com' target='_blank' rel='noreferrer'>
                  Facebook
                </a>
              </li>

              <li>
                <a href='http://whatsapp.com' target='_blank' rel='noreferrer'>
                  Whatsapp
                </a>
              </li>
            </ul>
          </div>

          <div>
            <Title title='Navegação' />

            <ul>
              <li>
                <Link href='/'>Inicio</Link>
              </li>

              <li>
                <Link href='/products'>Produtos</Link>
              </li>

              <li>
                <Link href='/profile'>Perfil</Link>
              </li>

              <li>
                <Link href='/contact'>Contato</Link>
              </li>
            </ul>
          </div>

          <div>
            <Title title='Links úteis' />

            <ul>
              <li>
                <Link href='/terms'>Termos de uso</Link>
              </li>

              <li>
                <Link href='/privacy'>Política de privacidade</Link>
              </li>

              <li>
                <Link href='/exchange'>Troca e devolução</Link>
              </li>
            </ul>
          </div>

          <div>
            <Title title='Newsletter' />

            <p>Receba nossas novidades</p>
            <input
              type='email'
              placeholder='Digite seu e-mail'
              onKeyDown={ (e) => {
                if (e.key === 'Enter') {
                  alert('E-mail cadastrado com sucesso!');
                }
              } }
            />
          </div>
        </section>
      </Container>
    </footer>
  );
};

export default Footer;
