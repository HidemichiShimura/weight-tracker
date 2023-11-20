import { ReactNode } from "react";

import styled from "styled-components";

import { COLOR } from "../Style/constant";

const Layout = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${COLOR.blue};
  background-image: ${COLOR.bgBlueMesh};
`;

export default function LoginSignupLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <Layout>{children}</Layout>;
}
