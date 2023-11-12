import styled from "styled-components";

const BlueMeshBg = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  background-color: var(--primary-blue-color);
  background-image: var(--blue-mesh-bg-img);
`;

export default function Home() {
  return <BlueMeshBg></BlueMeshBg>;
}
