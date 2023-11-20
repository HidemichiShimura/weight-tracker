import styled from "styled-components";

import {
  DEVICE_WIDTH,
  FONT_SIZE,
  BORDER_RADIUS,
  PADDING,
  COLOR,
} from "../../../../Style/constant";

export const Form = styled.form`
  border-radius: ${BORDER_RADIUS.main};
  min-width: 300px;
  padding: ${PADDING.main};
  display: flex;
  flex-direction: column;
  gap: ${PADDING.main};
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
  color: ${COLOR.white};
  padding: 8px;
  border: 1px solid ${COLOR.lightWhite};
  background: transparent;
  outline-color: transparent;

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
  border: 1px solid ${COLOR.lightWhite};
  padding: 8px;
  background: transparent;
  color: ${COLOR.white};
  opacity: 0.5;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }

  @media (min-width: ${DEVICE_WIDTH.tablet}) {
    font-size: ${FONT_SIZE.md};
  }
  @media (min-width: ${DEVICE_WIDTH.laptop}) {
    font-size: ${FONT_SIZE.lg};
  }
`;
