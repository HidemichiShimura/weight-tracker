import styled from "styled-components";

import { DEVICE_WIDTH, FONT_SIZE } from "../../../utils/constants";

type WeightDataProps = {
  data: { weight: string; date: string };
};

const Container = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;
const Weight = styled.p`
  font-size: calc(${FONT_SIZE.xl} * 2);

  @media (min-width: ${DEVICE_WIDTH.tablet}) {
    font-size: calc(${FONT_SIZE.xl} * 2.5);
  }
  @media (min-width: ${DEVICE_WIDTH.laptop}) {
    font-size: calc(${FONT_SIZE.xl} * 3);
  }
`;
const Date = styled.p`
  font-size: ${FONT_SIZE.sm};

  @media (min-width: ${DEVICE_WIDTH.tablet}) {
    font-size: ${FONT_SIZE.md};
  }
  @media (min-width: ${DEVICE_WIDTH.laptop}) {
    font-size: ${FONT_SIZE.lg};
  }
`;

export default function WeightData({ data }: WeightDataProps) {
  return (
    <Container>
      <Weight>{data.weight} kg</Weight>
      <Date>at {data.date}</Date>
    </Container>
  );
}
