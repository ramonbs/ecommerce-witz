import IProduct from '@interfaces/Product';

export function getBestSellers(products: IProduct[]) {
  return products
    .filter((product) => product.best_seller)
    .map((product) => ({
      id: product._id,
      title: product.title,
      thumbnail: product.thumbnail,
    }));
}

export function getReleases(products: IProduct[]) {
  return products
    .filter((product) => product.release)
    .map((product) => ({
      id: product._id,
      title: product.title,
      thumbnail: product.thumbnail,
    }));
}

export function getDiscounts(products: IProduct[]) {
  return products
    .filter((product) => product.discount)
    .map((product) => ({
      id: product._id,
      title: product.title,
      thumbnail: product.thumbnail,
    }));
}
