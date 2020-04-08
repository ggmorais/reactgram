import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
  };

  body {
    margin: 0;
    padding: 0;
    border: 0;
    background-color: ${(props: any) => props.theme.base1};
    font-family: 'Roboto Condensed', sans-serif;
    overflow-x: hidden;
  };
  
  #root {
    width: 100%;
    height: 100%;
  }

  a {
    text-decoration: none;
    color: black;
  }

  ul li {
    list-style: none;
  }
`;