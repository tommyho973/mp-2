import Amiibo from "./components/Amiibo.tsx";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { AmiiboChar } from "./interfaces/AmiiboChar.ts";
import { AmiiboApiResponse } from "./interfaces/AmiiboApiResponse.ts";
import Title from "./components/Title.tsx";

const ParentDiv = styled.div`
  width: 80vw;
  margin: 0 10%;
  border: 5px seagreen solid;
  align-items: center;
`;
const ElderDiv = styled.div`
  background-color: deepskyblue;
  width: 130%;
`;

export default function App() {
  const [data, setData] = useState<AmiiboChar[]>([]);
  useEffect(() => {
    async function fetchData(): Promise<void> {
      const rawData = await fetch(
        "https://www.amiiboapi.com/api/amiibo/?amiiboSeries=Mario"
      );
      const results: AmiiboApiResponse = await rawData.json();
      setData(results.amiibo);
    }
    fetchData()
      .then(() => console.log("Data fetch successful"))
      .catch((e: Error) => console.log("Data fetch unsuccessful " + e));
  }, [data.length]);
  return (
    <ElderDiv>
      <ParentDiv>
        <Title></Title>
        <Amiibo data={data} />
      </ParentDiv>
    </ElderDiv>
  );
}
