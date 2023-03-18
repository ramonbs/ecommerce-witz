import Container from '@components/container';
import { Layout } from '@components/layout';
import React from 'react';
import styles from '../../templates/exchange/styles.module.scss';

const exchangeTerms: React.FC = () => {
  return (
    <Layout>
      <Container>
        <section className={ styles.wrapper }>
          <h1 className={ styles.title }>Política de Troca</h1>
          <p>A Autêntica, valoriza a satisfação de nossos clientes e acredita na qualidade de nossos produtos. Se por qualquer motivo você não estiver completamente satisfeito com sua compra, oferecemos a seguinte política de troca:</p>
          <ul className={ styles.list }>
            <li>As trocas podem ser feitas dentro de 30 dias após a compra por um produto de valor igual ou menor.</li>
            <li>Os produtos devem estar em suas condições e embalagens originais, com todas as etiquetas anexadas e acompanhados por um recibo ou comprovante de compra.</li>
            <li>Os custos de envio para a troca são de responsabilidade do cliente.</li>
            <li>Se o produto estiver com defeito ou danificado, entre em contato com nosso departamento de atendimento ao cliente em [informações de contato]. Arrangiaremos para que o item com defeito seja retornado e um substituto seja enviado a você sem custo adicional.</li>
          </ul>
          <p>Se você tiver alguma dúvida ou preocupação com relação à nossa política de troca, não hesite em entrar em contato conosco em [informações de contato].</p>
        </section>
      </Container>
    </Layout>
  );
};

export default exchangeTerms;
