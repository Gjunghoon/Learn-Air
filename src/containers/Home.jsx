import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { UndrawResearchingSVG, PlayButtonSVG, HamburgerSVG } from "../assets";

const categories = [
  {
    subtitle: "감성적인 마음을 적시는",
    title: "통기타 클래스",
  },
  {
    subtitle: "노래방 인싸 되기",
    title: "보컬 클래스",
  },
  {
    subtitle: "내 손으로 만드는",
    title: "작곡 Tool 클래스",
  },
  {
    subtitle: "힐링이 필요할 땐",
    title: "클래식 피아노",
  },
];

const Home = () => {
  const history = useHistory();
  return (
    <Container>
      <Main>
        <HamburgerSVG />
        <MainTitle>Learn Air</MainTitle>
        <MainSubtitle>온라인 퍼스널 레슨 플랫폼</MainSubtitle>
        <SearchBox>
          <input
            type="text"
            placeholder="어떤 수업을 원하시나요?"
            onSubmit={(e) => console.log(e.target.value)}
          />
        </SearchBox>
        <Event>
          <EventMessage>Learn-Air가 쏜다! 회원가입 이벤트</EventMessage>
          <Login onClick={() => history.push("/login")}>로그인 하기</Login>
          <UndrawResearchingSVG />
        </Event>
      </Main>
      <Categories>
        <h2>온라인 레슨 카테고리</h2>
        <CategorySelectBox>
          <Category onClick={() => history.push("/category")}>음악</Category>
          <Category onClick={() => history.push("/category")}>학습</Category>
          <Category onClick={() => history.push("/category")}>회화</Category>
          <Category onClick={() => history.push("/category")}>디자인</Category>
        </CategorySelectBox>
        <ClassWrapper>
          {categories.map((category, index) => (
            <Class onClick={() => history.push("/class")}>
              <div>
                <Subtitle>{category.subtitle}</Subtitle>
                <Title>{category.title}</Title>
              </div>
              <PlayButtonSVG />
            </Class>
          ))}
        </ClassWrapper>
      </Categories>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  position: relative;
`;

const Main = styled.div`
  padding: 1.875rem;
  background-color: #5aa6c8;
  border-radius: 0 0 4rem 5rem;
  height: 26rem;
  margin-bottom: 3rem;
  > svg {
    margin-left: 86%;
    z-index: 2;
    position: relative;
  }
`;

const MainTitle = styled.div`
  font-size: 2.125rem;
  font-weight: 800;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.21;
  letter-spacing: normal;
  text-align: left;
  color: #ffffff;
  margin-top: 4.625rem;
`;
const MainSubtitle = styled.div`
  font-size: 1.375rem;
  font-weight: 700;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.86;
  letter-spacing: normal;
  text-align: left;
  color: #ffffff;
  margin-bottom: 1.438rem;
`;

const SearchBox = styled.div`
  > input {
    width: 20.25rem;
    height: 3rem;
    border-radius: 15px;
    -webkit-backdrop-filter: blur(50px);
    backdrop-filter: blur(50px);
    background-color: #ffffff;
    border-radius: 20px;
    font-size: 0.938rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.47;
    letter-spacing: normal;
    text-align: left;
    color: #305f72;
    border: none;
    outline: none;
    padding: 0 1.37rem;
    margin-bottom: 1rem;
  }
`;
const Event = styled.div`
  padding: 1.688rem 1.75rem;
  box-sizing: border-box;

  > svg {
    width: 8.213rem;
    height: 4.296rem;
    object-fit: contain;

    position: absolute;
    bottom: 2rem;
    right: -1rem;
  }

  width: 20.25rem;
  height: 8.891rem;
  -webkit-backdrop-filter: blur(50px);
  backdrop-filter: blur(50px);
  background-color: #eaf9fe;
  border-radius: 20px;
  margin-bottom: 1.296rem;
`;

const EventMessage = styled.div`
  width: 10rem;
  height: 3rem;
  font-size: 1.25rem;
  font-weight: 700;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: left;
  color: #305f72;
  margin-bottom: 0.438rem;
`;

const Login = styled.div`
  width: 9.25rem;
  height: 2.188rem;
  background-color: #579aca;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.75rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.08;
  letter-spacing: normal;
  text-align: left;
  color: #fef3f3;
  cursor: pointer;
`;

const CategorySelectBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-bottom: 0.688rem;
  cursor: pointer;
`;
const Categories = styled.div`
  padding: 1.875rem;

  > h2 {
    font-size: 1.125rem;
    font-weight: 800;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.22;
    letter-spacing: normal;
    text-align: left;
    color: #305f72;
    margin-bottom: 0.625rem;
  }
`;

const Category = styled.div`
  width: 4.688rem;
  height: 2rem;
  background-color: #5aa6c8;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  margin-right: 0.313rem;
  color: #f9f9f9;

  font-size: 0.875rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.29;
  letter-spacing: normal;
  text-align: left;
  color: #f9f9f9;
`;

const ClassWrapper = styled.div``;

const Class = styled.div`
  display: flex;
  align-items: center;

  width: 19.688rem;
  height: 4.344rem;
  background-color: rgba(235, 239, 246, 0.56);
  border-radius: 20px;
  padding: 0 1.983rem;
  box-sizing: border-box;

  margin-bottom: 0.468rem;
  > div {
    display: flex;
    flex-direction: column;
  }
  > svg {
    margin-left: auto;
  }
  cursor: pointer;
`;

const Subtitle = styled.span`
  font-size: 1rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.38;
  letter-spacing: normal;
  text-align: left;
  color: #305f72;
`;
const Title = styled.span`
  font-size: 1.125rem;
  font-weight: 800;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.22;
  letter-spacing: normal;
  text-align: left;
  color: #305f72;
`;
