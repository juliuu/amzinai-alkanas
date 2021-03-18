import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    /* secular-one-normal */
    @font-face {
    font-family: 'Secular One';
    font-style: normal;
    font-weight: normal;
    src: local('Secular One'),
        url('../fonts/secular-one-v5-latin-regular.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
        url('../fonts/secular-one-v5-latin-regular.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
    }

    /* roboto-normal */
    @font-face {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: normal;
        src: local('Roboto'),
            url('./assets/fonts/roboto-v20-latin-300.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
            url('./assets/fonts/roboto-v20-latin-300.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
    }

    /* roboto-italic */
    @font-face {
        font-family: 'Roboto';
        font-style: italic;
        font-weight: normal;
        src: local('Roboto'),
            url('./assets/fonts/roboto-v20-latin-300italic.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
            url('./assets/fonts/roboto-v20-latin-300italic.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
    }

    /* roboto-bold */
    @font-face {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: bold;
        src: local('Roboto'),
            url('./assets/fonts/roboto-v20-latin-900.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
            url('./assets/fonts/roboto-v20-latin-900.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
    }

    html, body {
        font-family: 'Roboto', Helvetica, san-serif;
        font-size: 14px;
        margin: 0;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    h1, h2, h3, h4, h5 {
        font-family: 'Secular One', Helvetica, sans-serif;
        margin: 0;
        padding: 0;
    }

    h1 {
        /* 24px */
        font-size: 1.714rem;
    }

    h2 {
        /* 22px */
        font-size: 1.571rem;
    }

    h3 {
        /* 20px */
        font-size: 1.429rem;
    }

    h4 {
        /* 18px */
        font-size: 1.286rem;
    }

    h5 {
        /* 14px */
        font-size: 1rem;
    }
`;
