import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import {
  HalfStarSVG,
  FullStarSVG,
  EmptyStarSVG,
  LeftArrowSVG,
  HamburgerSVG,
} from "../assets";

const sampleClass = {
  subtitle: "서울종합예술실용학교 준비 과정",
  title: "어쿠스틱 기타 연주",
  score: "3.5",
  reviewAmounts: 326,
  originalPrice: 28000,
  earlyBirdPrice: 25000,
  tutorName: "한태우",
  tutorImageURL: "",
};

const Class = () => {
  const {
    subtitle,
    title,
    score,
    reviewAmounts,
    originalPrice,
    earlyBirdPrice,
    tutorName,
  } = sampleClass;
  const history = useHistory();
  const applyClass = () => {
    window.location.href =
      "https://zoom.us/j/93254573815?pwd=VTVCaE5QUXpRbVIraFBOdWgyNXI0dz09";
  };
  return (
    <Container>
      <Header>
        <div onClick={() => history.goBack()}>
          <LeftArrowSVG />
        </div>
        <span onClick={() => history.push("/category")}>Music Category</span>
        <div>
          <HamburgerSVG />
        </div>
      </Header>
      <Wrapper>
        <TutorImage />
        <ClassDescription>
          <Subtitle>{subtitle}</Subtitle>
          <Title>{title}</Title>
          <Rating>
            <FullStarSVG />
            <FullStarSVG />
            <FullStarSVG />
            <HalfStarSVG />
            <EmptyStarSVG />
            <span>{score}</span>
            <span>({reviewAmounts})</span>
          </Rating>
        </ClassDescription>
        <TutorDescription>
          <FlexBox>
            <h2>{tutorName} 튜터</h2>
            <OriginalPrice>
              오리지널 시간 당 {originalPrice.toLocaleString()}원
            </OriginalPrice>
            <EarlyBirdPrice>
              얼리버드 시간 당 {earlyBirdPrice.toLocaleString()}원
            </EarlyBirdPrice>
          </FlexBox>
          <HonorTutor>추천 튜터</HonorTutor>
        </TutorDescription>
        <AnotherDescription>
          <span>{tutorName} 튜터는 Learn-Air 가 추천하는 튜터입니다.</span>
          <div>
            <SelectBox>강의소개</SelectBox>
            <SelectBox>리뷰</SelectBox>
            <SelectBox>튜터 SNS</SelectBox>
          </div>
        </AnotherDescription>
        <ApplyButton onClick={applyClass}>지금 신청하기</ApplyButton>
        <p style={{ textAlign: "center", margin: "1rem" }}>
          (첫 신청시 맛보기 강의 15분이 제공됩니다)
        </p>
      </Wrapper>
    </Container>
  );
};

export default Class;

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
  height: 47rem;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16);
  background-color: #ffffff;
  padding: 0.5rem;
  border-radius: 1rem;
`;

const TutorImage = styled.div`
  background-image: url("https://gjunghoon-tinder-clone.s3.ap-northeast-2.amazonaws.com/tae-woo.jpg");
  width: 21.625rem;
  height: 16.188rem;
  background-size: cover;
  background-position: center;
`;

const ClassDescription = styled.div`
  height: 7.125rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);

  margin-bottom: 0.625rem;
`;
const Subtitle = styled.div`
  padding-top: 1.125rem;
  font-family: NanumSquare;
  font-size: 1.125rem;
  font-weight: 400;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.11;
  letter-spacing: normal;
  text-align: left;
  color: rgba(0, 0, 0, 0.71);
  margin-bottom: 0.375rem;
`;
const Title = styled.div`
  font-size: 1.75rem;
  font-weight: 800;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.21;
  letter-spacing: normal;
  text-align: left;
  color: #000000;
  margin-bottom: 0.375rem;
`;
const Rating = styled.div`
  font-size: 0.75rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.08;
  letter-spacing: normal;
  text-align: left;
  color: #000000;
  > span {
    margin-left: 0.5rem;
    &:last-child {
      margin: 0;
    }
  }
`;

const TutorDescription = styled.div`
  width: 21.5rem;
  height: 7rem;
  border-radius: 6px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16);
  background-color: #ffffff;

  display: flex;
  align-items: center;
  padding: 1rem;

  margin-bottom: 0.688rem;
`;

const FlexBox = styled.div`
  display: flex;
  flex-direction: column;
  > h2 {
    font-size: 1.5rem;
    font-weight: 800;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.21;
    letter-spacing: normal;
    text-align: left;
    color: #000000;
    margin: 0;
    margin-bottom: 0.625rem;
  }
`;

const OriginalPrice = styled.div`
  font-size: 1rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.13;
  letter-spacing: normal;
  text-align: left;
  color: #000000;
  margin-bottom: 0.125rem;
`;
const EarlyBirdPrice = styled.div`
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.19;
  letter-spacing: normal;
  text-align: left;
  color: #ec8689;
`;

const HonorTutor = styled.div`
  width: 5rem;
  height: 5rem;
  border-radius: 2px;
  background-color: #8ca6ec;

  font-size: 1.563rem;
  font-weight: 800;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: left;
  color: #000000;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;

  margin-left: auto;
`;

const AnotherDescription = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  > span {
    margin: 0 auto;
    margin-bottom: 0.625rem;
    text-align: center;
    font-size: 0.875rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.29;
    letter-spacing: normal;
    text-align: center;
    color: #000000;
  }
  > div {
    display: flex;
    justify-content: space-between;
  }
  padding-bottom: 0.75rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
`;

const SelectBox = styled.div`
  width: 5.813rem;
  height: 2rem;
  border-radius: 16px;
  font-size: 0.875rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.29;
  letter-spacing: normal;
  text-align: left;
  color: #000000;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0.625rem;

  background-color: rgba(0, 0, 0, 0.16);
`;

export const ApplyButton = styled.div`
  width: 100%;
  height: 3.563rem;
  border-radius: 13px;
  background-color: #5aa6c8;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.375rem;
  font-weight: 800;
  font-stretch: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: normal;
  text-align: center;
  color: #f8f8f8;
  margin-top: 2.75rem;
  cursor: pointer;
`;
