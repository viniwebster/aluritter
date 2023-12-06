import { createGlobalStyle } from "styled-components";
import { primaryFont } from "./variables";


export const GlobalStyles = createGlobalStyle`
  * {
    font-family: ${primaryFont};
    box-sizing: border-box;
    font-size: 16px;
  }

  body {
    font-family: ${primaryFont};
    box-sizing: border-box;
  }

`