import styled from "styled-components";
import { AmiiboChar } from "../interfaces/AmiiboChar.ts";

const AllCharsDiv = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  background-color: #f7daea;
`;

const SingleCharDiv = styled.div<{ type: string }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 30%;
  padding: 2%;
  margin: 1%;
  background-color: ${(props) => (props.type === "Kirby" ? "pink" : "black")};
  color: ${(props) => (props.type !== "Kirby" ? "white" : "black")};
  border: 3px darkred solid;
  font: italic small-caps bold calc(2px + 1vw) Papyrus, fantasy;
  text-align: center;
`;
export default function Amiibo(props: { data: AmiiboChar[] }) {
  return (
    <AllCharsDiv>
      {props.data.map((char: AmiiboChar) => (
        <SingleCharDiv key={char.head} type={char.character}>
          <h1>{char.name}</h1>
          <p>Series: {char.gameSeries}</p>
          <p>{char.type}</p>
          <img src={char.image} alt={`image of ${char.name}`} />
        </SingleCharDiv>
      ))}
    </AllCharsDiv>
  );
}
