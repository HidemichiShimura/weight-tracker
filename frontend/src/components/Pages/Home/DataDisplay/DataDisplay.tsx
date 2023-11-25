import { useEffect, useState } from "react";

import { BlurContainer, Toggle, WeightData, HistoryData } from "@components";
import { Container, ToggleContainer } from "./DataDisplay.styled";
import { getData } from "@utils/functions";
import { useIsDataUpdated } from "@hooks";

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
  const [allData, setAllData] = useState<any>([{}]);
  const { isDataUpdated, setIsDataUpdated } = useIsDataUpdated();

  useEffect(() => {
    const res = getData();

    res.then((dataList: any) => {
      const latestD = getLatestData(dataList);
      const allD = dataList;

      setLatestData(latestD);
      setAllData(allD);
      setIsDataUpdated(false);
    });
  }, [isDataUpdated]);

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
          <HistoryData dataList={allData} />
        )}
      </Container>
    </BlurContainer>
  );
}
