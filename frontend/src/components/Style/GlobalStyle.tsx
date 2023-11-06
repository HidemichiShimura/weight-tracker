import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --primary-blue-color: #274c77;
    --blue-mesh-bg-img: radial-gradient(
      at 80% 0%,
      hsla(189, 100%, 56%, 1) 0px,
      transparent 50%
    ),
    radial-gradient(at 80% 50%, hsla(333, 0%, 97%, 1) 0px, transparent 50%),
    radial-gradient(at 0% 100%, hsla(207, 74%, 79%, 1) 0px, transparent 50%);
;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;
