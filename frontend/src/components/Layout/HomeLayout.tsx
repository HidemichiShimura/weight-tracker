import { ReactNode } from "react";

import styled from "styled-components";

import { DEVICE_WIDTH } from "../../utils/constants";

const Container = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  gap: 10px;

  @media (min-width: ${DEVICE_WIDTH.tablet}) {
    padding: 30px;
    gap: 30px;
  }

  @media (min-width: ${DEVICE_WIDTH.laptop}) {
    padding: 50px;
    gap: 50px;
  }
`;

export default function HomeLayout({ children }: { children: ReactNode }) {
  return <Container>{children}</Container>;
}
