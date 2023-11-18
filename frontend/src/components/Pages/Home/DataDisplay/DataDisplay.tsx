import { useEffect, useState } from "react";

import { BlurContainer, Toggle, WeightData, HistoryData } from "@components";
import { Container, ToggleContainer } from "./DataDisplay.styled";
import { getData } from "@utils/functions";

// These are mock weight data and to be replaced with the actual data later
const DATA_LIST = [
  { weight: "62.5", date: "2023-11-23" },
  { weight: "62.5", date: "2023-11-23" },
  { weight: "62.5", date: "2023-11-23" },
];

function getLatestData(dataList: Array<{ weight: number; date: Date }>) {
  let latestData = dataList[0] || {};

  dataList.forEach((data) => {
    const date = new Date(data.date);

    if (new Date(latestData.date).valueOf() < date.valueOf()) latestData = data;
  });

  return latestData;
}

export default function DataDisplay() {
  const [selected, setSelected] = useState("latest");
  const [latestData, setLatestData] = useState<any>({});

  useEffect(() => {
    const res = getData();

    res.then((dataList: any) => {
      const latestD = getLatestData(dataList);

      setLatestData(latestD);
    });
  }, []);

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
          <WeightData data={latestData} />
        ) : (
          <HistoryData dataList={DATA_LIST} />
        )}
      </Container>
    </BlurContainer>
  );
}
