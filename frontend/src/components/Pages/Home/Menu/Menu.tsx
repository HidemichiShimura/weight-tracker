import { useState } from "react";

import styled from "styled-components";

import {
  BlurContainer,
  Toggle,
  AddForm,
  ModForm,
  DelForm,
} from "../../../index";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 25px 50px;
`;
const ToggleContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export default function Menu() {
  const [selected, setSelected] = useState("add");

  return (
    <BlurContainer>
      <Container>
        <ToggleContainer>
          <Toggle
            isSelected={selected === "add"}
            onClick={() => setSelected("add")}
          >
            Add
          </Toggle>
          <Toggle
            isSelected={selected === "mod"}
            onClick={() => setSelected("mod")}
          >
            Modify
          </Toggle>
          <Toggle
            isSelected={selected === "del"}
            onClick={() => setSelected("del")}
          >
            Delete
          </Toggle>
        </ToggleContainer>
        {selected === "add" && <AddForm />}
        {selected === "mod" && <ModForm />}
        {selected === "del" && <DelForm />}
      </Container>
    </BlurContainer>
  );
}
