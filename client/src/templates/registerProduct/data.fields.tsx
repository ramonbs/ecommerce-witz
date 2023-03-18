interface FormField {
    label: string;
    name: string;
    value: string;
    type: string;
    placeholder?: string;
}

export const labelsForRegisterProducts: FormField[] = [
  {
    label: 'ID',
    name: 'idProduct',
    value: 'idProduct',
    type: 'number',
    placeholder: 'Entre com o ID do produto',
  },
  {
    label: 'Nome do produto',
    name: 'title',
    value: 'title',
    type: 'text',
    placeholder: 'Entre com o nome do produto',
  },
  {
    label: 'Descrição',
    name: 'description',
    value: 'description',
    type: 'text',
    placeholder: 'Entre com a Descrição',
  },
  {
    label: 'Preço',
    name: 'unit_price',
    value: 'unit_price',
    type: 'number',
    placeholder: 'Entre com o preço',
  },
  {
    label: 'Número de Estoque',
    name: 'stock',
    value: 'stock',
    type: 'number',
    placeholder: 'Entre com a quantidade em estoque',
  },
  {
    label: 'Image',
    name: 'thumbnail',
    value: 'thumbnail',
    type: 'file',
    placeholder: 'Passe a url da Image',
  },
  {
    label: 'Categoria',
    name: 'category',
    value: 'category',
    type: 'text',
    placeholder: 'Entre com a Categoria do produto',
  },
  {
    label: 'Lançamento?',
    type: 'checkbox',
    name: 'release',
    value: 'release',
  },
  {
    label: 'Promoção?',
    type: 'checkbox',
    name: 'discount',
    value: 'discount',
  },
  {
    label: 'Mais vendidos?',
    type: 'checkbox',
    name: 'best_seller',
    value: 'best_seller',
  },
];

export default labelsForRegisterProducts;
