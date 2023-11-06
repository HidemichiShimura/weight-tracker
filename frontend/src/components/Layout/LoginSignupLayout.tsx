import { ReactNode } from "react";

import styled from "styled-components";

const Layout = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--primary-blue-color);
  background-image: var(--blue-mesh-bg-img);
`;

export default function LoginSignupLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <Layout>{children}</Layout>;
}
