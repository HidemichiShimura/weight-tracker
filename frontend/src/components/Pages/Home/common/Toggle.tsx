import { ReactNode } from "react";

import styled from "styled-components";

import { DEVICE_WIDTH, FONT_SIZE } from "@utils/constants";

type ToggleProps = {
  children: ReactNode;
  isSelected: boolean;
  onClick: () => void;
};

const StyledToggle = styled.div<ToggleProps>`
  padding: 10px 20px;
  font-size: ${FONT_SIZE.sm};
  border-bottom: 1px solid
    ${(props) =>
      props.isSelected
        ? "var(--primary-white-color)"
        : "rgba(245, 245, 245, 0.2)"};
  background-color: transparent;
  color: var(--primary-white-color);
  cursor: pointer;
  opacity: ${(props) => (props.isSelected ? 1 : 0.5)};
  transition: opacity, 0.5s;

  @media (min-width: ${DEVICE_WIDTH.tablet}) {
    font-size: ${FONT_SIZE.md};
  }

  @media (min-width: ${DEVICE_WIDTH.laptop}) {
    font-size: ${FONT_SIZE.lg};
  }
`;

export default function Toggle({ children, isSelected, onClick }: ToggleProps) {
  return (
    <StyledToggle isSelected={isSelected} onClick={onClick}>
      {children}
    </StyledToggle>
  );
}
