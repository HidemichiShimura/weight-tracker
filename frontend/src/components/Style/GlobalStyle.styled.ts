import { createGlobalStyle } from "styled-components";

import { COLOR, FONT_SIZE } from "./constant";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-size: ${FONT_SIZE.sm};
    color: ${COLOR.white};
  }
`;
