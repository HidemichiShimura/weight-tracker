import styled from "styled-components";

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

export const PortalTitle = styled.h2`
  text-align: center;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label``;

export const Input = styled.input`
  padding: 8px;
  border: none;
`;

export const ErrText = styled.p`
  color: var(--primary-red-color);
  margin-top: 4px;
`;

export const Button = styled.button`
  font-size: 16px;
  color: var(--primary-white-color);
  background-color: var(--primary-blue-color);
  border: none;
  padding: 8px;
`;
