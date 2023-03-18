import { setFilteredProducts } from '@app/reducers/filteredProducts';
import IProduct from '@interfaces/Product';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import styles from './Filter.module.scss';

interface IFilter {
  products: IProduct[];
}

const Filter: React.FC<IFilter> = (props) => {
  const { products } = props;

  const dispatch = useDispatch();

  const MAX_VALUE = Math.max(...products.map(p => p.unit_price));
  const MIN_VALUE = Math.min(...products.map(p => p.unit_price));
  const [price, setPrice] = useState(MAX_VALUE);
  const [category, setCategory] = useState('all');
  const [color, setColor] = useState('all');
  const [size, setSize] = useState('all');

  const onFilter = () => {
    const filteredProducts = products.filter((p) => p.unit_price <= price);
    dispatch(setFilteredProducts(filteredProducts));
  };

  useEffect(() => {
    dispatch(setFilteredProducts(products));
  }, []);

  return (
    <div className={ styles.filter }>
      <label htmlFor='price' className={ styles.price }>
        Preço - R$ { price }

        <div>
          <span>R$ { MIN_VALUE }</span>

          <input
            type='range'
            name='price'
            id='price'
            min={ MIN_VALUE }
            max={ MAX_VALUE }
            defaultValue={ MAX_VALUE }
            onChange={ (e) => setPrice(Number(e.target.value)) }
            title='Preço'
          />

          <span>R$ { MAX_VALUE }</span>
        </div>

        <datalist id='prices'>
          <option value='0' label='0%'></option>
        </datalist>
      </label>

      <label htmlFor='category'>
        Categoria

        <select
          name='category'
          id='category'
          value={ category }
          onChange={ (e) => setCategory(e.target.value) }
        >
          <option value='all'>Todas</option>
          <option value='1'>Categoria 1</option>
          <option value='2'>Categoria 2</option>
          <option value='3'>Categoria 3</option>
        </select>
      </label>

      <label htmlFor='color'>
        Cor

        <select
          name='color'
          id='color'
          value={ color }
          onChange={ (e) => setColor(e.target.value) }
        >
          <option value='all'>Todas</option>
          <option value='1'>Cor 1</option>
          <option value='2'>Cor 2</option>
          <option value='3'>Cor 3</option>
        </select>
      </label>

      <label htmlFor='size'>
        Tamanho

        <select
          name='size'
          id='size'
          value={ size }
          onChange={ (e) => setSize(e.target.value) }
        >
          <option value='all'>Todos</option>
          <option value='1'>Tamanho 1</option>
          <option value='2'>Tamanho 2</option>
          <option value='3'>Tamanho 3</option>
        </select>
      </label>

      <label htmlFor='filter'>
        &nbsp;
        <button
          type='button'
          className={ styles.cta }
          onClick={ onFilter }
        >
          Filtrar
        </button>
      </label>
    </div>
  );
};

export default Filter;
