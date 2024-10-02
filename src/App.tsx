import Amiibo from "./components/Amiibo.tsx";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { AmiiboChar } from "./interfaces/AmiiboChar.ts";
import { AmiiboApiResponse } from "./interfaces/AmiiboApiResponse.ts";

const ParentDiv = styled.div`
  width: 80vw;
  margin: auto;
  border: 5px #d74894 solid;
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
    <ParentDiv>
      <Amiibo data={data} />
    </ParentDiv>
  );
}
