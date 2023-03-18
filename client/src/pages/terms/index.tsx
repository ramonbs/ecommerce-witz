import Container from '@components/container';
import { Layout } from '@components/layout';
import React from 'react';
import styles from '../../templates/terms/styles.module.scss';

const userTerms: React.FC = () => {
  return (
    <Layout>
      <Container>
        <section className={ styles.wrapper }>
          <h1 className={ styles.title }>Termos de Uso</h1>
          <p>Ao acessar e usar a Autêntica Store, você concorda com os seguintes termos de uso:</p>
          <ul className={ styles.list }>
            <li>Você é responsável por manter a confidencialidade de suas informações de login e senha.</li>
            <li>Não usaremos ou compartilharemos suas informações pessoais sem sua permissão, exceto conforme exigido por lei.</li>
            <li>Não publicaremos conteúdo ilegal, difamatório, ameaçador, obsceno, escandaloso, pornográfico ou que viole direitos autorais ou de propriedade intelectual de terceiros.</li>
            <li>Reservamos o direito de modificar estes Termos de Uso a qualquer momento sem aviso prévio. É sua responsabilidade revisar regularmente os Termos de Uso para ficar ciente de quaisquer modificações.</li>
            <li>Ao violar estes Termos de Uso, reservamos o direito de cancelar sua conta sem aviso prévio.</li>
          </ul>
          <p>Se você tiver alguma dúvida ou preocupação com relação aos nossos Termos de Uso, não hesite em entrar em contato conosco em [informações de contato].</p>
        </section>
      </Container>
    </Layout>
  );
};

export default userTerms;
