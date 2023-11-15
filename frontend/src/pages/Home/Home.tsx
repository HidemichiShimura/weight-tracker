import styled from "styled-components";
import { HomeLayout, Header, DataDisplay, Menu } from "../../components/index";

const BlueMeshBg = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  background-color: var(--primary-blue-color);
  background-image: var(--blue-mesh-bg-img);
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
