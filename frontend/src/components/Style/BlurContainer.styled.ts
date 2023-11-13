import styled from "styled-components";

export const BlurContainer = styled.div`
  display: inline-block;
  border-radius: var(--main-border-radius);
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.16);
  backdrop-filter: blur(50px);
`;
