import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import BaseStyle from './utils/BaseStyle';
import './index.css'
import { ProductsCart } from './contexts/contextCart'


ReactDOM.render(
  <React.StrictMode>
    <ProductsCart>
      <App />
    </ProductsCart>
    <BaseStyle/>
  </React.StrictMode>,
  document.getElementById('root')
);

