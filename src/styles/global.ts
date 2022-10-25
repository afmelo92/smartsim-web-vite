import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    /* overflow: hidden; */
    font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  }

  body {
    background: #1a1a1a;
    color: #eee;
    -webkit-font-smoothing: antialiased !important;
    scroll-behavior: smooth;
  }
`;
