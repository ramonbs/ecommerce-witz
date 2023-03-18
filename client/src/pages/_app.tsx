import { store } from '@app/store';
import { DefaultSeo } from 'next-seo';
import type { AppProps } from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';

import '@styles/App.scss';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Provider store={ store }>
      <DefaultSeo
        title='Autêntica Store'
        description='Autêntica Store, a loja que vende produtos autênticos.'
        openGraph={ {
          type: 'website',
          locale: 'pt_BR',
          // url: 'https://www.url.ie/',
          siteName: 'Autêntica Store',
        } }
      />
      <Component { ...pageProps } />
    </Provider>
  );
};

export default App;
