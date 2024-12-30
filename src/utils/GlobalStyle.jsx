//** All this component is for an use-friendly style **
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle` 
    html {
        scroll-behavior: smooth;
    }

    :root {
        --primary-color: #FFAC00;
        --secondary-color: #DA3E8E;

        --first-bg-color: #1E1E1E;
        --secondary-bg-color: #3A3A3A;
        --tertiary-bg-color: #000000;
        
        --first-font-color: #FFFFFF;
        --title-font-family: "Poppins", sans serif;
        --text-font-family: "outfit", sans serif;
    }

    body {
        max-width: 1440px;
        margin: 0 auto;
        padding: 0;
        font-family: var(--text-font-family); 
        color: var(--first-font-color);
        text-decoration: none;
        background-color: var(--first-bg-color);
    }
`;

export default GlobalStyle;
