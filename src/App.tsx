import React from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import { darkTheme } from './theme';
import { Wordle } from './wordle';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;400&display=swap');
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, menu, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  main, menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, main, menu, nav, section {
    display: block;
  }
  /* HTML5 hidden-attribute fix for newer browsers */
  *[hidden] {
      display: none;
  }
  body {
    line-height: 1;
  }
  menu, ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  * {
    box-sizing: border-box;
  }
  body {
    font-family: 'Work Sans', sans-serif;
    background-color: ${props => props.theme.bgColor};
    color: ${props => props.theme.textColor}
  }
  a {
    text-decoration: none;
    color:inherit;
  }
`

const Title = styled.h1`
  font-size: 5rem;
  color: ${props => props.theme.accentColor};
  text-align:center;
  margin-top: 3rem;
`

function App() {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
      <GlobalStyle />
        <Title>WORDLE</Title>
        <Wordle></Wordle>
      </ThemeProvider>
    </>
  );
}

export default App;
