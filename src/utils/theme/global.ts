import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700;800&display=swap');

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
        max-height: 100%;
        overflow-y: scroll;
    }
`;

export default GlobalStyle;
