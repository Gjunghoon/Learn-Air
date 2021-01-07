import React, { useEffect } from "react";
import styled from "styled-components";

const App = () => {
  return (
    <Container>
      <h2>지윤아 사당행</h2>
      <img src="https://gjunghoon-tinder-clone.s3.ap-northeast-2.amazonaws.com/love.jpg" />
      <p>If nothing lasts forever,</p>
      <p>will you be my nothing?</p>
    </Container>
  );
};

export default App;

const Container = styled.div`
  margin: 0 auto;
  max-width: 375px;
  > h2,
  p {
    text-align: center;
  }
`;
const Body = styled.div``;
