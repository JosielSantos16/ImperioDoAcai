import React from 'react'; // Importante importar o React
import ReactDOM from 'react-dom/client';
import Login from '../src/pages/Login';
import GlobalStyle from './styles/globalStyles';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <GlobalStyle />
    <Login />
  </>
);