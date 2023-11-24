import { ReactNode } from "react";

import styled from "styled-components";

import { DEVICE_WIDTH } from "../Style/constant";

const Container = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;

  @media (min-width: ${DEVICE_WIDTH.tablet}) {
    gap: 50px;
  }

  @media (min-width: ${DEVICE_WIDTH.laptop}) {
    gap: 100px;
  }
`;

export default function HomeLayout({ children }: { children: ReactNode }) {
  return <Container>{children}</Container>;
}
