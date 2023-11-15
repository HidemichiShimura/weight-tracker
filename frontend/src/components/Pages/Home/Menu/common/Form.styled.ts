import styled from "styled-components";

import { DEVICE_WIDTH, FONT_SIZE } from "../../../../../utils/constants";

export const Form = styled.form`
  border-radius: var(--main-border-radius);
  min-width: 300px;
  padding: var(--inbtwn-elem-padding);
  display: flex;
  flex-direction: column;
  gap: var(--inbtwn-elem-padding);
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
  color: var(--primary-white-color);
  padding: 8px;
  border: 1px solid rgba(245, 245, 245, 0.2);
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
  color: var(--primary-red-color);
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
  border: 1px solid rgba(245, 245, 245, 0.2);
  padding: 8px;
  background: transparent;
  color: var(--primary-white-color);
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
