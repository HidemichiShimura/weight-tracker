import styled from "styled-components";

import { DEVICE_WIDTH, FONT_SIZE } from "@utils/constants";

export const Table = styled.table`
  border: 1px solid rgba(245, 245, 245, 0.2);
  border-collapse: collapse;
`;
export const HeaderTr = styled.tr`
  font-size: ${FONT_SIZE.md};
  color: var(--primary-white-color);
  background-color: rgba(245, 245, 245, 0.2);
  border-collapse: collapse;

  @media (min-width: ${DEVICE_WIDTH.tablet}) {
    font-size: ${FONT_SIZE.lg};
  }
  @media (min-width: ${DEVICE_WIDTH.laptop}) {
    font-size: ${FONT_SIZE.xl};
  }
`;
export const Th = styled.th`
  padding: 10px 20px;
`;
export const Tr = styled.tr`
  font-size: ${FONT_SIZE.sm};

  @media (min-width: ${DEVICE_WIDTH.tablet}) {
    font-size: ${FONT_SIZE.md};
  }
  @media (min-width: ${DEVICE_WIDTH.laptop}) {
    font-size: ${FONT_SIZE.lg};
  }
`;
export const Td = styled.td`
  border: 1px solid rgba(245, 245, 245, 0.2);
  text-align: center;
  padding: 10px 20px;
`;
