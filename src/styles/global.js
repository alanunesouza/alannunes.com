import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  html {
    font-size: 10px;
  }

  body {
    overflow-x: hidden;
    font-size: 2rem;
    margin: 0;
    padding: 0;
    vertical-align: baseline;
    font-family: "Wotfard",Futura,-apple-system,sans-serif;

  }

  html, body, #___gatsby, #gatsby-focus-wrapper, .tl-edges  {
    height: 100%;
  }

  input, textarea {
    :disabled {
      background: none;
      opacity: 0.6;
    }
  }

  span {
    font-size: 12px;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
    background: none;
  }
`;
