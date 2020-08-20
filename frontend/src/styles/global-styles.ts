import { createGlobalStyle } from 'styled-components';
import { StyleConstants } from './StyleConstants';
/* istanbul ignore next */
export const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
    line-height: 1.5;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    padding-top: ${StyleConstants.NAV_BAR_HEIGHT};
    background-color: ${p => p.theme.background};
  }

  body.fontLoaded {
    font-family: 'Inter', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  p,
  label {
    line-height: 1.5em;
  }

  input, select, button {
    font-family: inherit;
    font-size: inherit;
  }

  .icon {
    width: 1.5rem;
    height: 1.5rem;
    vertical-align: -0.125em;
  }

  .icon[data-icon="caretDown"]{
    content: url('https://api.iconify.design/ant-design:caret-down-filled.svg?height=10');
  }

  .icon[data-icon="shoppingCart"]{
    content: url('https://api.iconify.design/ant-design:shopping-cart-outlined.svg?height=10');
  }

  .icon[data-icon="search"]{
    content: url('https://api.iconify.design/ant-design:search-outlined.svg?height=10');
  }

  .icon[data-icon="corn"]{
    content: url('https://api.iconify.design/carbon:corn.svg?height=10');
    width: 1.1rem !important;
  }
`;
