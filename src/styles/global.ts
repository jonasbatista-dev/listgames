'use client';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`


@font-face {
  font-display: swap;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 300;
  src: url('/fonts/poppins-v23-latin-300.woff2') format('woff2');
}

@font-face {
  font-display: swap;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  src: url('/fonts/poppins-v23-latin-regular.woff2') format('woff2');
}

@font-face {
  font-display: swap;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  src: url('/fonts/poppins-v23-latin-600.woff2') format('woff2');
}

* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box
}
html {
  font-size: 62.5%;
  }
html, body {
    height: 100vh !important;
    font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
    'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
    'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}


`;

export default GlobalStyles;
