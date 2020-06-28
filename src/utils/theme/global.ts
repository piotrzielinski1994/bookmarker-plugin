import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        box-sizing: border-box;
    }

    body {
        margin: 0;
        /* color: #fff; */
        width: 400px;
        height: 500px;
        background-color: #212121;
        border: 1px solid green;
    }

    #root {
        height: 100%;
        overflow-y: scroll;
    }
`;

export default GlobalStyle;
