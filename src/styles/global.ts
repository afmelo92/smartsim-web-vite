import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  }

   /* width */
::-webkit-scrollbar {
  width: 8px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #1a1a1a;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #444;
  border-radius: 50px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}

  body {
    background: #1a1a1a;
    color: #eee;
    -webkit-font-smoothing: antialiased !important;
    scroll-behavior: smooth;
  }
`;
