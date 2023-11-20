import styled from "styled-components";

import {
  BORDER_RADIUS,
  COLOR,
  DEVICE_WIDTH,
  FONT_SIZE,
  PADDING,
} from "../Style/constant";

export const Form = styled.form`
  color: ${COLOR.blue};
  background-color: ${COLOR.white};
  border-radius: ${BORDER_RADIUS.main};
  min-width: 300px;
  padding: ${PADDING.main};
  display: flex;
  flex-direction: column;
  gap: ${PADDING.main};
`;

export const PortalTitle = styled.p`
  font-size: 24px;
  font-weight: bold;
  text-align: center;

  @media (min-width: ${DEVICE_WIDTH.tablet}) {
    font-size: 30px;
  }
  @media (min-width: ${DEVICE_WIDTH.laptop}) {
    font-size: 36px;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  @media (min-width: ${DEVICE_WIDTH.tablet}) {
    font-size: ${FONT_SIZE.md};
  }
  @media (min-width: ${DEVICE_WIDTH.laptop}) {
    font-size: ${FONT_SIZE.lg};
  }
`;

export const Input = styled.input`
  font-size: ${FONT_SIZE.sm};
  padding: 8px;
  border: none;

  @media (min-width: ${DEVICE_WIDTH.tablet}) {
    font-size: ${FONT_SIZE.md};
  }
  @media (min-width: ${DEVICE_WIDTH.laptop}) {
    font-size: ${FONT_SIZE.lg};
  }
`;

export const ErrText = styled.p`
  color: ${COLOR.red};
  margin-top: 4px;

  @media (min-width: ${DEVICE_WIDTH.tablet}) {
    font-size: ${FONT_SIZE.md};
  }
  @media (min-width: ${DEVICE_WIDTH.laptop}) {
    font-size: ${FONT_SIZE.lg};
  }
`;

export const Button = styled.button`
  font-size: ${FONT_SIZE.sm};
  color: ${COLOR.white};
  background-color: ${COLOR.blue};
  border: none;
  padding: 8px;

  @media (min-width: ${DEVICE_WIDTH.tablet}) {
    font-size: ${FONT_SIZE.md};
  }
  @media (min-width: ${DEVICE_WIDTH.laptop}) {
    font-size: ${FONT_SIZE.lg};
  }
`;
