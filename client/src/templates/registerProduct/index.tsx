import {
  createProduct,
  deleteProduct,
  uploadImage
} from '@services/api/products';
import labelsForRegisterProducts from '@templates/registerProduct/data.fields';
import React from 'react';
import styles from './registerProduct.module.scss';

interface IProps {
  products: [
    {
      _id: number;
      idProduct: number;
      title: string;
      description: string;
      unit_price: number;
      thumbnail: string;
      stock: number;
      category: string;
      best_seller: boolean;
      discount: boolean;
      release: boolean;
    },
  ];
}

interface IProduct {
  [key: string]: unknown;
  idProduct: string;
  title: string;
  description: string;
  unit_price: string;
  thumbnail: Blob | string;
  stock: string;
  category: string;
  best_seller: boolean;
  discount: boolean;
  release: boolean;
}

function RegisterProducts(props: IProps) {
  const { products } = props;

  const [productsState, setProductsState] = React.useState<IProduct>({
    idProduct: '',
    title: '',
    description: '',
    unit_price: '',
    thumbnail: '',
    stock: '',
    category: '',
    best_seller: false,
    discount: false,
    release: false,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    if (event.target.type === 'checkbox') {
      return setProductsState({ ...productsState, [name]: event.target.checked });
    }

    if (name === 'thumbnail' && event.target.files?.[0]) {
      return setProductsState({ ...productsState, [name]: event.target.files?.[0] });
    }

    return setProductsState({ ...productsState, [name]: value });
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { thumbnail } = productsState;

    const image = new FormData();
    image.append('thumbnail', thumbnail);

    const newProduct = {
      ...productsState,
    };

    try {
      const imageResponse = await uploadImage(image);
      imageResponse.data.src = `http://localhost:3002/product/images${imageResponse.data.url}`;
      newProduct.thumbnail = imageResponse.data.src;

      const data = await createProduct(newProduct);
      console.log(data);

    } catch (error) {
      throw new Error(`Erro ao cadastrar produto, erro: ${error}`);
    } finally {
      cleanForm();
    }
  };

  // This is a function that removes all text from a form.

  const cleanForm = () => {
    const form = document.querySelector('form');
    form?.reset();
  };

  // This is a function that removes a product from the database.
  const removeProduct = async (id: number) => {
    try {
      const idString = id.toString();

      await deleteProduct(idString);
    } catch (error) {
      throw new Error(`Não foi possível remover o produto, erro ${error}`);
    }
  };

  return (
    <>
      <h1 className={ styles.product_form__title }>Register</h1>

      <form
        onSubmit={ onSubmit }
        className={ styles.form }
      >
        { labelsForRegisterProducts.map((label, index) => (
          <div
            key={ index }
            className={ styles.product_form }
          >
            <label htmlFor={ label.name }>{ label.label }:</label>
            { label.type === 'file' ? (
              <input
                type={ label.type }
                name={ label.name }
                onChange={ handleChange }
                id={ label.name }
                className={ styles.product_form__input }
                placeholder={ label.placeholder }
                multiple
                accept='image/*'
              />
            ) : (
              <input
                type={ label.type }
                name={ label.name }
                onChange={ handleChange }
                value={ productsState[label.name] as string }
                id={ label.name }
                className={ styles.product_form__input }
                placeholder={ label.placeholder }
                checked={ productsState[label.name] as boolean }
              />
            ) }
          </div>
        )) }
        { /* sessão para mostrar todos os produtos, e um botão para editar o produto */ }
        <button
          type='submit'
          className={ styles.product_form__button }
        >
          Register
        </button>
      </form>

      <div className={ styles.products_container }>
        { products &&
          products.map((product) => (
            <div
              key={ product._id }
              className={ styles.product }
            >
              <h1>{ product.title }</h1>
              <p>{ product.description }</p>
              <p>{ product.unit_price }</p>
              <img
                src={ product.thumbnail }
                alt={ product.title }
                style={ { width: '100px' } }
              />
              <p>{ product.stock }</p>
              <p>{ product.category }</p>
              <p>{ product.best_seller ? 'Best seller' : 'Not best seller' }</p>
              <p>{ product.discount ? 'Discount' : 'Not discount' }</p>
              <p>{ product.release ? 'Release' : 'Not release' }</p>
              <button
                type='button'
                className={ styles.product_button }
                onClick={ () => removeProduct(product._id) }
              >
                Remover
              </button>
            </div>
          )) }
      </div>
    </>
  );
}

export default RegisterProducts;
