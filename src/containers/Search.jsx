import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { LeftArrowSVG, HamburgerSVG } from "../assets";
import { ApplyButton } from "./Class";

const tutors = [
  {
    tutorImageURL:
      "https://gjunghoon-tinder-clone.s3.ap-northeast-2.amazonaws.com/jieun.jpg",
    subtitle: "통기타 여신과 함께하는",
    title: "기타연주 클래스",
    tutorName: "이지은",
    price: 30000,
  },
  {
    tutorImageURL:
      "https://gjunghoon-tinder-clone.s3.ap-northeast-2.amazonaws.com/red.jpg",
    subtitle: "젊음을 불태우고 싶다면",
    title: "일렉기타 클래스",
    tutorName: "김빨강",
    price: 20000,
  },
  {
    tutorImageURL:
      "https://gjunghoon-tinder-clone.s3.ap-northeast-2.amazonaws.com/hongdae.jpg",
    subtitle: "차근차근 시작하는",
    title: "기타 입문 클래스",
    tutorName: "박홍대",
    price: 30000,
  },
];

const Search = () => {
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

export default Search;

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
`;

const SearchBox = styled.div`
  width: 20.25rem;
  height: 3rem;
  border-radius: 15px;
  -webkit-backdrop-filter: blur(50px);
  backdrop-filter: blur(50px);
  border: solid 1px #5aa6c8;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  padding-left: 1rem;
`;

const Tutor = styled.div`
  display: flex;
  align-items: center;
  width: 21.5rem;
  height: 7.625rem;
  border-radius: 6px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16);
  background-color: #ffffff;
  padding: 0.5rem;
  cursor: pointer;

  > div {
    font-size: 1.125rem;
    font-weight: 800;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.22;
    letter-spacing: normal;
    text-align: left;
    color: #000000;
    margin-left: 0.5rem;
    width: 100%;
    > div {
      width: 100%;
      margin-top: 0.688rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 1.125rem;
      font-weight: 700;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.11;
      letter-spacing: normal;
      text-align: center;
      color: #374761;
    }
  }
  margin-bottom: 0.625rem;
`;
const Img = styled.img`
  background-size: cover;
`;
