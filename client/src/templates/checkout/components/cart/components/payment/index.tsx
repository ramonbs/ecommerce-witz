import IProduct from '@interfaces/Product';
import { createPreference } from '@services/api/mercadoPago';
import Error, { ErrorProps } from 'next/error';
import React, { useEffect, useState } from 'react';
import styles from './Payment.module.scss';

interface IPayment {
  subtotal: number;
  items: IProduct[];
}

interface CustomErrorProps extends ErrorProps {
  message: string;
}

const Payment: React.FC<IPayment> = (props) => {
  const { subtotal, items } = props;

  const [total, setTotal] = useState(0);
  const [freight] = useState(0);

  useEffect(() => {
    sumOfTotal();
  }, [subtotal, freight]);

  // function getFreigth() {}

  function sumOfTotal () {
    setTotal(subtotal + freight);
  }

  async function checkoutPayment(items: IProduct[]) {
    try{
      const response = await createPreference(items);
      console.log(response);

    } catch (error: unknown) {
      return error.message;
    }
  }

  return (
    <section className={ styles.container }>
      <h2>Total Carrinho</h2>
      <div className={ styles.information_containers }>
        <div className={ styles.information }>
          <p className={ styles.title }>Subtotal</p>
          <p className={ styles.value }>R$ { subtotal }</p>
        </div>
        <hr />
        <div className={ styles.information }>
          <p className={ styles.title }>Frete</p>
          <p className={ styles.value }>R$ 0,00</p>
        </div>
        <hr />
        <div className={ styles.information }>
          <p className={ styles.title }>Total</p>
          <p className={ styles.value }>R$ { total }</p>
        </div>
      </div>
      <button
        onClick={ () => checkoutPayment(items) }
        className={ styles.buy_button }
      >
        Finalizar Compra
      </button>
    </section>
  );
};

export default Payment;
