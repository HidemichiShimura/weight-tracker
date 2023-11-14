import { HistoryDataProps } from "./HistoryData.d";

import { HeaderTr, Table, Td, Th, Tr } from "./HistoryData.styled";

export default function HistoryData({ dataList }: HistoryDataProps) {
  return (
    <Table>
      <tbody>
        <HeaderTr>
          <Th>Weight</Th>
          <Th>Date</Th>
        </HeaderTr>
        {dataList.map((data, idx) => {
          return (
            <Tr key={idx}>
              <Td>{data.weight} kg</Td>
              <Td>{data.date}</Td>
            </Tr>
          );
        })}
      </tbody>
    </Table>
  );
}
