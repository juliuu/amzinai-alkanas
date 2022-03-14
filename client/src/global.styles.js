import { createGlobalStyle } from 'styled-components';

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

    *, *::before, *::after {
        box-sizing: border-box;
    }

    html, body {
        font-family: 'Roboto', Helvetica, san-serif;
        font-size: 16px;
        margin: 0;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

        scroll-behavior: smooth;
    }

    :root {
        /* Fixed params */
        --navbar-height: 3.6rem;

        /* General params */
        --page-layout-width: 100%;
        --page-layout-padding: clamp(1.25rem, calc((100vw - var(--page-layout-width)) / 2), 20vw);
        --home-page-content-width: 100%;
        --button-font-size: 12px;
        --button-padding: 11px 15px;

        /* Home Page --> Intro Section params */
        --introSection-height: 21.875rem;
        --heading-font-size: 1.125rem;
        --heading-margins: 0 0 0.75rem 0;
        --subheading-font-size: 0.5rem;
        --subheading-margins: 0 0 1.063rem 0;

        /* Home Page --> Preview section params */
        --card-padding: 2.187rem;
        --card-content-margin-bottom: 0.625rem;
        --card-width: 17.375rem;
        --card-height: 25.31rem;
        --card-picture-min-height: 12.625rem;
        --card-heading-font-size: 14px;
        --card-font-size: 12px;

        /* Home Page --> Top Section params */
        --topSection-flex-direction: column;
        --topSection-justify: center;
        --firstChild-margin-right: 0;
    }

    /* Support only for mobile/tablet sizes */
    @media screen and (min-width: 700px) {
        html, body {
            font-size: 18px;
        }

        :root {
            /* General params */
            --page-layout-width: 1920px;
            --page-layout-padding: clamp(1.8rem, calc((100vw - var(--page-layout-width)) / 2), 20vw);
            --home-page-content-width: 1237px;
            --button-font-size: 16px;
            --button-padding: 12px 20px;

            /* Home Page --> Intro Section params */
            --introSection-height: 40rem;
            --heading-font-size: 2.333rem;
            --heading-margins: 0 0 1.111rem 0;
            --subheading-font-size: 1.222rem;
            --subheading-margins: 0 0 2.222rem 0;

            /* Home Page --> Preview section params */
            --card-padding: 1.944rem;
            --card-content-margin-bottom: 0.555rem;
            --card-width: 21.5rem;
            --card-height: 25rem;
            --card-picture-min-height: 11.111rem;
            --card-heading-font-size: 20px;
            --card-font-size: 16px;

            /* Home Page --> Top Section params */
            --topSection-flex-direction: row;
            --topSection-justify: space-between;
            --firstChild-margin-right: 3rem;
        }
    }

    h1, h2, h3, h4, h5 {
        font-family: 'Secular One', Helvetica, sans-serif;
        margin: 0;
        padding: 0;
    }

    h1, h2, h3, h4, h5, p, ul {
        margin: 0;
        padding: 0;
    }

    h1 {
        /* 24px */
        font-size: 1.333rem;
    }

    h2 {
        /* 22px */
        font-size: 1.222rem;
    }

    h3 {
        /* 20px */
        font-size: 1.111rem;
    }

    h4 {
        /* 18px */
        font-size: 1rem;
    }

    h5 {
        /* 14px */
        font-size: 0.778rem;
    }
`;

export const breakpoints = {
  _700: 700,
  _800: 800,
  _900: 900,
  _1200: 1200,
};

export const MediaQuery = (key) => {
  return (style) => `@media (min-width: ${breakpoints[key]}px) { ${style} }`;
};
