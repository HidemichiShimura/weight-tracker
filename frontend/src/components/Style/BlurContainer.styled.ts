import styled from "styled-components";

import { BORDER_RADIUS } from "./constant";

export const BlurContainer = styled.div`
  display: inline-block;
  border-radius: ${BORDER_RADIUS.main};
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.16);
  backdrop-filter: blur(50px);
`;
