import { ApolloProvider } from '@apollo/client';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import { client } from './api';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <RecoilRoot>
        <></>
      </RecoilRoot>
    </ApolloProvider>
  </React.StrictMode>
);
