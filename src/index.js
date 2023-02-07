import React from 'react';
import ReactDOM from 'react-dom/client';
import Login from './containers/Login';
import GlobalStyle from './styles/globalStyle';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Login/>
    <GlobalStyle/>
  </>
);

