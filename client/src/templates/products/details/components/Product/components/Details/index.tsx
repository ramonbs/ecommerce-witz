import { IproductDetails } from '@app/reducers/productDetails';
import Favorite from '@components/favorite';
import { useRouter } from 'next/router';
import React, { MouseEventHandler } from 'react';
import { IoShareSocialOutline } from 'react-icons/io5';
import { useSelector } from 'react-redux';

import styles from './Details.module.scss';

const Details: React.FC = () => {
  const product = useSelector((state: IproductDetails) => state.productDetails.product);
  const router = useRouter();

  const handleClick: MouseEventHandler<HTMLButtonElement> = () => {
    if(!product) return;
    handleAddToCart();
    router.push('/checkout');
  };

  const handleShare: MouseEventHandler<SVGSVGElement> = () => {
    if(navigator){
      if (navigator.share) {
        navigator.share({
          title: 'Autêntica Store',
          text: 'Autêntica Store, a loja que vende produtos autênticos.',
          url: window.location.href,
        })
          .then(() => console.log('Successful share'))
          .catch((error) => console.log('Error sharing', error));
      }
    }
  };

  const handleAddToCart = () => {
    if(!product) return;
    if(localStorage.length === 0){
      localStorage.setItem('cart', JSON.stringify([product]));
    }

    const cart = JSON.parse(localStorage.getItem('cart') || '[]');

    const productExists = cart.find((item: any) => item.id === product.idProduct);

    if(productExists){

      const newCart = cart.map((item: any) => {
        if(item.id === product.idProduct){
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }

        return item;
      });

      localStorage.setItem('cart', JSON.stringify(newCart));

      return;
    }

    localStorage.setItem('cart', JSON.stringify([...cart, product]));
  };

  return (
    <section className={ styles.details }>
      <h1 className={ styles.title }>{ product?.title }</h1>

      <p className={ styles.price }>R$ { product?.unit_price }</p>

      <p className={ styles.category }>Categoria <span>Vestido</span></p>

      <div className={ styles.options }>
        <label
          htmlFor='size'
          className={ styles.size }
        >
          Tamanho

          <select id='size'>
            <option hidden>Selecione</option>
            <option>PP</option>
            <option>P</option>
            <option>M</option>
            <option>G</option>
            <option>GG</option>
          </select>
        </label>

        <label
          htmlFor='color'
          className={ styles.color }
        >
          Cor

          <select id='color'>
            <option hidden>Selecione</option>
            <option>Preto</option>
            <option>Branco</option>
            <option>Azul</option>
            <option>Verde</option>
            <option>Vermelho</option>
          </select>
        </label>
      </div>


      <div className={ styles.actions }>
        <IoShareSocialOutline className={ styles.share } onClick={ handleShare } />
        <Favorite />
      </div>

      <button
        className={ styles.addToCart }
        onClick={ () => handleAddToCart() }
      >
        Adicionar à sacola
      </button>
      <button
        className={ styles.buy }
        onClick={ handleClick }
      >
        Comprar
      </button>
    </section>
  );
};

export default Details;
