import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;1,300;1,400&family=Syne:wght@600;700;800&display=swap');
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
  height: fit-content;
  max-height: 100vh;
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
