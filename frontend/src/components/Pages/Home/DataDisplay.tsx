import { useState } from "react";

import styled from "styled-components";

import { BlurContainer, Toggle, WeightData, HistoryData } from "@components";

// These are mock weight data and to be replaced with the actual data later
const LATEST_DATA = { weight: "62.5", date: "2023-11-23" };
const DATA_LIST = [
  { weight: "62.5", date: "2023-11-23" },
  { weight: "62.5", date: "2023-11-23" },
  { weight: "62.5", date: "2023-11-23" },
];

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

export default function DataDisplay() {
  const [selected, setSelected] = useState("latest");

  return (
    <BlurContainer>
      <Container>
        <ToggleContainer>
          <Toggle
            isSelected={selected === "latest"}
            onClick={() => setSelected("latest")}
          >
            Latest
          </Toggle>
          <Toggle
            isSelected={selected === "history"}
            onClick={() => setSelected("history")}
          >
            History
          </Toggle>
        </ToggleContainer>
        {selected === "latest" ? (
          <WeightData data={LATEST_DATA} />
        ) : (
          <HistoryData dataList={DATA_LIST} />
        )}
      </Container>
    </BlurContainer>
  );
}
