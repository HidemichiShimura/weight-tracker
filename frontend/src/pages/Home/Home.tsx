import styled from "styled-components";

import { HomeLayout, Header, DataDisplay, Menu } from "../../components/index";

import { COLOR } from "../../components/Style/constant";

const BlueMeshBg = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  background-color: ${COLOR.blue};
  background-image: ${COLOR.bgBlueMesh};
`;

export default function Home() {
  return (
    <BlueMeshBg>
      <HomeLayout>
        <Header />
        <DataDisplay />
        <Menu />
      </HomeLayout>
    </BlueMeshBg>
  );
}
