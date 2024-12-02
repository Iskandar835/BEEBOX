// All this synthaxe is for an use-friendly style
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle` 
    :root {
        --primary-color: #FFAC00;
        --secondary-color: #DA3E8E;

        --first-bg-color: #1E1E1E;
        --secondary-bg-color: #3A3A3A;
        
        --first-font-color: #FFFFFF;
        --title-font-family: "Poppins", sans serif;
        --text-font-family: "outfit", sans serif;
    }

    body {
        margin: 0;
        padding: 0;
        font-family: var(--text-font-family); 
        color: var(--first-font-color);
        text-decoration: none;
        background-color: var(--first-bg-color);
    }
`;

export default GlobalStyle;
