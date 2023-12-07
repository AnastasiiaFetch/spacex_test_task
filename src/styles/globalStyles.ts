import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-size: 16px;
  scroll-behavior: smooth;
}

body {
  height: 100vh;
  font-family: 'Lato', 'Syne', sans-serif;
}

section {
  max-height: fit-content;
  max-width: 100vw;
  overflow: hidden;
}

a {
  text-decoration: none;
  color: inherit;
}

ul {
  list-style-type: none;
}

`;
