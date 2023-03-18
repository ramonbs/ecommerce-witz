interface IProduct {
  _id: string,
  idProduct: string,
  title: string,
  description: string,
  unit_price: number,
  stock: number,
  thumbnail: string,
  best_seller: boolean,
  release: boolean,
  discount: boolean,
  quantity?: number,
}

export default IProduct;
