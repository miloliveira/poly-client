import { createGlobalStyle } from "styled-components";
import {colors} from "./variables.styles"
export const GlobalStyle = createGlobalStyle`

* {margin:0;
padding: 0;
box-sizing:border-box
}

body {
    font-family: 'Nunito', sans-serif;
    font-size:16px;
    background-color: ${colors.backgroundPrimary};
}

`;
