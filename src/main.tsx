import { ApolloProvider } from '@apollo/client';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import { client } from './api';
import Router from './router';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <RecoilRoot>
        <Router />
      </RecoilRoot>
    </ApolloProvider>
  </React.StrictMode>
);

if (window.location.pathname === '/') {
  window.location.replace('/spaceX');
}
