import Container from '@components/container';
import { Layout } from '@components/layout';
import React from 'react';
import styles from '../../templates/privacy/styles.module.scss';

const privacyTerms: React.FC = () => {
  return (
    <Layout>
      <Container>
        <section className={ styles.wrapper }>
          <h1 className={ styles.title }>Política de Privacidade</h1>
          <p>Ao usar a Autêntica Store, você confia em nós com suas informações pessoais e nós entendemos a importância de protegê-las. Esta política de privacidade descreve como coletamos, usamos, compartilhamos e protegemos suas informações.</p>
          <ul className={ styles.list }>
            <li>Coletamos informações pessoais, como nome, endereço de e-mail, endereço de entrega e informações de pagamento, quando você cria uma conta ou realiza uma compra em nosso site.</li>
            <li>Usamos suas informações pessoais para processar suas compras, entregar produtos, gerenciar sua conta e para comunicações relacionadas à sua conta.</li>
            <li>Não vendemos, trocamos ou alugamos suas informações pessoais a terceiros sem sua permissão, exceto quando necessário para processar sua compra, cumprir uma ordem judicial ou proteger nossos direitos.</li>
            <li>Tomamos medidas de segurança razoáveis para proteger suas informações pessoais contra acesso não autorizado, uso ou divulgação.</li>
            <li>Você tem o direito de acessar, atualizar e excluir suas informações pessoais em sua conta em [nome do seu site].</li>
          </ul>
          <p>Se você tiver alguma dúvida ou preocupação com relação à nossa Política de Privacidade, não hesite em entrar em contato conosco em [informações de contato].</p>
        </section>
      </Container>
    </Layout>
  );
};

export default privacyTerms;
