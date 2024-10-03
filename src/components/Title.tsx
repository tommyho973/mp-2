import styled from "styled-components";

const StyledDiv = styled.div`
  align-items: center;
  background-color: crimson;
  border: solid lemonchiffon 5px;
`;
const StyledH1 = styled.h1`
  font-weight: bold;
  text-align: center;
  color: white;
`;
export default function Title() {
  return (
    <>
      <StyledDiv>
        <StyledH1>Mario Amiibos</StyledH1>
      </StyledDiv>
    </>
  );
}
