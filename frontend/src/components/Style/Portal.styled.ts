import styled from "styled-components";

import { DEVICE_WIDTH, FONT_SIZE } from "@utils/constants";

export const Form = styled.form`
  color: var(--primary-blue-color);
  background-color: var(--primary-white-color);
  border-radius: var(--main-border-radius);
  min-width: 300px;
  padding: var(--inbtwn-elem-padding);
  display: flex;
  flex-direction: column;
  gap: var(--inbtwn-elem-padding);
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
  color: var(--primary-white-color);
  background-color: var(--primary-blue-color);
  border: none;
  padding: 8px;

  @media (min-width: ${DEVICE_WIDTH.tablet}) {
    font-size: ${FONT_SIZE.md};
  }
  @media (min-width: ${DEVICE_WIDTH.laptop}) {
    font-size: ${FONT_SIZE.lg};
  }
`;
