import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { LeftArrowSVG, HamburgerSVG } from "../assets";

const Review = () => {
  const history = useHistory();

  return (
    <Container>
      <Header>
        <div onClick={() => history.goBack()}>
          <LeftArrowSVG />
        </div>
        <span onClick={() => history.push("/category")}>Search</span>
        <div>
          <HamburgerSVG />
        </div>
      </Header>
      <Wrapper>
        <SearchBox>기타</SearchBox>
        {tutors.map((tutor, index) => (
          <Tutor onClick={() => history.push("/class")}>
            <Img src={tutor.tutorImageURL} />
            <div>
              <p>{tutor.subtitle}</p>
              <p>{tutor.title}</p>
              <div>
                <div>{tutor.tutorName}</div>
                <div>지금 {tutor.price.toLocaleString()}원</div>
              </div>
            </div>
          </Tutor>
        ))}
        <ApplyButton onClick={() => history.push("/")}>
          메인으로 돌아가기
        </ApplyButton>
      </Wrapper>
    </Container>
  );
};

export default Review;

const Container = styled.div`
  background-color: #5aa6c8;
  height: 100%;
  padding: 0 0.5rem;
`;

const Header = styled.div`
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  > div {
    width: 2.75rem;
    height: 2.75rem;
    border-radius: 11px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  > span {
    font-size: 1.5rem;
    font-weight: 700;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.08;
    letter-spacing: normal;
    text-align: left;
    color: #ffffff;
  }
`;

const Wrapper = styled.div`
  width: 22.563rem;
  height: 45rem;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16);
  background-color: #ffffff;
  padding: 0.5rem;
  border-radius: 1rem;
  > h2 {
    padding-left: 1.25rem;
    margin-top: 1rem;
    margin-bottom: 0.813rem;
    font-size: 1.375rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1;
    letter-spacing: normal;
    color: #020202;
    font-weight: 800;
  }
`;
