import { createGlobalStyle } from 'styled-components'


const BaseStyle = createGlobalStyle`

  :root {
    --color-pink: #D0006F;
    --color-dark-pink: #a00055;
    --color-purple: #491fab;
    --color-blue: #0071ed;
    --color-white: #FFF;
    --color-gray: rgba(0,0,0,.05);
    --color-dark-gray: #808080;

    --box-shadow: 0 1px 10px rgba(0,0,0,.1),0 4px 5px rgba(0,0,0,.15),0 2px 4px rgba(0,0,0,.2);

    --font-product-name: 0.938rem;
    --font-price: 1.25rem;
    --font-normal-price: 0.933rem;
    --font-promo-price: 1.35rem;
    --font-quantity: 0.875rem;
    --font-pum: 0.8rem;
  }

  *,
    *::before,
    *::after {
        box-sizing: border-box;
        list-style: none;
        margin: 0;
        padding: 0;
        transition: all 0.3s ease-in-out;
        &:focus,
        &:outline,
        &::-moz-focus-outer {
            outline: 0;
        }
    }
    body {
      font-family: 'Source Sans Pro', sans-serif;
    }
`

export default BaseStyle
