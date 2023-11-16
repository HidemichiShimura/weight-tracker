import styled from "styled-components";

import { BlurContainer } from "@components";
import { APP, DEVICE_WIDTH, FONT_SIZE } from "@utils/constants";

const StyledHeader = styled.header`
  height: 70px;
  width: calc(100vw - 10px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;

  @media (min-width: ${DEVICE_WIDTH.tablet}) {
    width: calc(100vw - 30px);
    padding: 0 30px;
  }

  @media (min-width: ${DEVICE_WIDTH.laptop}) {
    width: calc(100vw - 50px);
    padding: 0 50px;
  }
`;

const AppTitle = styled.p`
  font-size: ${FONT_SIZE.xl};
`;

const LoginEmail = styled.p`
  font-size: ${FONT_SIZE.xl};
`;

export default function Header() {
  return (
    <BlurContainer>
      <StyledHeader>
        <AppTitle>{APP.name}</AppTitle>
        <LoginEmail>user@user.com</LoginEmail>
      </StyledHeader>
    </BlurContainer>
  );
}
