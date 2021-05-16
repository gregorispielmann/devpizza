import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --background: #f0f2f5;

    --red: #e52e4d;
    --blue: #0072BB;
    --orange: #F8A54D;
    --blue-gradient: linear-gradient(90deg, rgba(0,114,187,1) 35%, rgba(0,63,103,1) 100%);

    --blue-light: #6933ff;
    --text-title: #363f5f;
    --text-body: #5A5D6B;
    --text-light: #969cb3;

    --shape: #fff;

    --background-image: url('https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=925&q=50');
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media(max-width: 1080px) {
      font-size: 93.75%;
    }

    @media(max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    margin: 0;
    padding: 0;
    background: var(--background);
    --webkit-font-smoothing: antialiased;

    overflow: auto;
    overflow-x: hidden;
  }

  body, input, textarea, button {
    font-family: 'Poppins', Sans-Serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export default GlobalStyle;
