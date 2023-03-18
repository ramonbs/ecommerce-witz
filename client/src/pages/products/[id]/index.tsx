import IProduct from '@interfaces/Product';
import { fetchAllProducts, fetchProductsById } from '@services/api/products';
import ProductDetailsTemplate from '@templates/products/details';
import { NextSeo } from 'next-seo';
import React from 'react';

  interface Props {
      _id: string;
      id: string;
      url: string;
      product: IProduct;
      related: IProduct[];
  }

const ProductDetails: React.FC<Props> = (props) => {

  return (
    <>
      <NextSeo
        title={ `${props.product.title} | Autêntica Store` }
        description={ `${props.product.description} | Autêntica Store` }
        openGraph={ {
          title: `${props.product.title} | Autêntica Store`,
          description: `${props.product.description} | Autêntica Store`,
          images: [
            {
              url: props.product.thumbnail,
              width: 800,
              height: 600,
              alt: `${props.product.title} | Autêntica Store`,
            },
          ],
        } }
      />

      <ProductDetailsTemplate product={ props.product } related={ props.related } />
    </>
  );
};


export async function getServerSideProps(context: { params: { id: string } }) {
  const { id } = context.params;
  const product = await fetchProductsById(id);
  const related = await fetchAllProducts();

  return {
    props: {
      product: product.data,
      related: related.data,
      id
    },
  };
}

export default ProductDetails;
