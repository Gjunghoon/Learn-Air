import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import {
  LeftArrowSVG,
  HamburgerSVG,
  HalfStarSVG,
  FullStarSVG,
  EmptyStarSVG,
} from "../assets";
import { ApplyButton } from "./Class";

const Review = () => {
  const history = useHistory();

  return (
    <Container>
      <Header>
        <div onClick={() => history.goBack()}>
          <LeftArrowSVG />
        </div>
        <span onClick={() => history.push("/category")}>Review</span>
        <div>
          <HamburgerSVG />
        </div>
      </Header>
      <Wrapper>
        <Tutor>
          <div>
            <img
              src="https://lh3.googleusercontent.com/proxy/CIA4ip7SM6A3FLqWoKrWZzbuJAWhyruR6wAbUZIbUe5iA6dXa3FnLD7Scp3q1FdGJriVu6_iEYlBAG1vFi9HUMMFCH-VkF_-iabDde9wwi2KhZK06pkWVcRB"
              alt=""
            />
            <span>한태우 튜터</span>
          </div>
          <h2>어쿠스틱 기타 연주</h2>
          <p>서울종합예술실용학교 준비 과정</p>
        </Tutor>
        <ReviewCard>
          <h2>튜터의 태도는 괜찮았나요?</h2>
          <div>
            <FullStarSVG />
            <FullStarSVG />
            <FullStarSVG />
            <HalfStarSVG />
            <EmptyStarSVG />
          </div>
          <div>세부내용 입력하기</div>
        </ReviewCard>
        <ReviewCard>
          <h2>수업의 질은 괜찮았나요?</h2>
          <div>
            <FullStarSVG />
            <FullStarSVG />
            <FullStarSVG />
            <EmptyStarSVG />
            <EmptyStarSVG />
          </div>
          <div>세부내용 입력하기</div>
        </ReviewCard>
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
const Tutor = styled.div`
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 6px;
  > div {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    > img {
      width: 2.563rem;
      height: 2.563rem;
      border-radius: 25px;
      border: solid 3px #f18c8e;
      background-size: cover;
    }
    > span {
      font-size: 1.125rem;
      font-weight: 800;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.22;
      letter-spacing: normal;
      text-align: left;
      color: #000000;
      margin-left: 1rem;
    }
  }
  > h2 {
    font-size: 1.5rem;
    font-weight: 800;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.08;
    letter-spacing: normal;
    text-align: left;
    color: #000000;
  }
  > p {
    opacity: 0.6;
    font-size: 1.125rem;
    font-weight: 400;
    font-stretch: normal;
    font-style: normal;
    line-height: 1;
    letter-spacing: normal;
    text-align: left;
    color: #000000;
  }
  width: 21.5rem;
  height: 8.991rem;
  border: solid 1px rgba(0, 0, 0, 0.2);
  background-color: #ffffff;
`;
const ReviewCard = styled.div`
  width: 21.5rem;
  height: 9.813rem;
  border-radius: 6px;
  border: solid 1px rgba(0, 0, 0, 0.2);
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > h2 {
    font-size: 1.25rem;
    font-weight: 800;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.1;
    letter-spacing: normal;
    text-align: left;
    color: #000000;
    margin-bottom: 0.5rem;
  }
  > div {
    > svg {
      width: 2.488rem;
      height: 2.488rem;
      object-fit: contain;
    }
    &:last-child {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 17.716rem;
      height: 2.526rem;
      background-color: rgba(220, 222, 224, 0.54);
      cursor: pointer;
      border-radius: 1rem;
    }
  }
  margin-bottom: 1rem;
`;
