import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { LeftArrowSVG, HamburgerSVG, RightArrowSVG } from "../assets";
import Class from "./Class";

const classesNow = [
  {
    subtitle: "어쿠스틱 기타 연주",
    title: "서울종합예술실용학교 준비 과정",
  },
];
const classesPast = [
  {
    subtitle: "공기 반 소리 반 트레이닝",
    title: "그건 아마 우리의 잘못은 아닐거야",
  },
  {
    subtitle: "단기 비즈니스 영어회화",
    title: "자유여행을 위한 첫걸음",
  },
];

const Mypage = () => {
  const history = useHistory();

  return (
    <Container>
      <Header>
        <div onClick={() => history.goBack()}>
          <LeftArrowSVG />
        </div>
        <span onClick={() => history.push("/")}>My Class</span>
        <div>
          <HamburgerSVG />
        </div>
      </Header>
      <Wrapper>
        <TuteeInfo>
          <img src="https://img3.yna.co.kr/etc/inner/KR/2018/07/18/AKR20180718026400005_01_i_P2.jpg" />
          <span>안가을 튜티</span>
          <RightArrowSVG />
        </TuteeInfo>
        <h2>진행 중인 수업</h2>
        {classesNow.map((classNow, index) => (
          <ClassCard>
            <h2>{classNow.subtitle}</h2>
            <span>{classNow.title}</span>
            <div>
              <div>수업 확인</div>
              <div>입장하기</div>
            </div>
          </ClassCard>
        ))}
        <h2>지난 수업 내역</h2>
        {classesPast.map((classPast, index) => (
          <ClassCard>
            <h2>{classPast.subtitle}</h2>
            <span>{classPast.title}</span>
            <div>
              <div>수업 확인</div>
              <div onClick={() => history.push("/review")}>리뷰작성</div>
            </div>
          </ClassCard>
        ))}
      </Wrapper>
    </Container>
  );
};

export default Mypage;

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

const TuteeInfo = styled.div`
  display: flex;
  align-items: center;
  padding-top: 1rem;
  padding-left: 1rem;
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
    color: #305f72;
    padding-left: 1rem;
  }
  > svg {
    width: 1.5rem;
    height: 1.5rem;
    padding: 0.5rem;
    background-color: rgba(59, 154, 222, 0.34);
    border-radius: 50%;
    margin-left: auto;
    cursor: pointer;
  }
`;

const ClassCard = styled.div`
  width: 21.5rem;
  height: 9rem;
  border-radius: 6px;
  border: solid 1px rgba(0, 0, 0, 0.2);
  background-color: #ffffff;
  padding: 1.5rem 1rem;
  > h2 {
    font-size: 1.5rem;
    font-weight: 800;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.08;
    letter-spacing: normal;
    text-align: left;
    color: #000000;
    margin-bottom: 0.563rem;
  }
  > span {
    font-size: 1.125rem;
    font-weight: 400;
    opacity: 0.6;
    font-stretch: normal;
    font-style: normal;
    line-height: 1;
    letter-spacing: normal;
    text-align: left;
    color: #000000;
  }
  > div {
    margin-top: 1rem;
    display: flex;
    > div {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 6.414rem;
      height: 2.141rem;
      background-color: #dcdee0;
      border-radius: 10px;
      margin-right: 1rem;
      cursor: pointer;
      &:last-child {
        width: 13.063rem;
        height: 2.141rem;
        background-color: rgba(132, 183, 218, 0.6);
      }
    }
  }
  margin-bottom: 0.5rem;
`;
