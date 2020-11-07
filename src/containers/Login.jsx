import React from "react";
import styled from "styled-components";

const Login = () => {
  return (
    <Container>
      <Header>
        <div>leftsvg</div>
        <span>Log In</span>
        <div>hamburgersvg</div>
      </Header>
      <Wrapper>
        <Message>
          <div>간편하게 로그인하고</div>
          <div>다양한 튜터를 만나보세요</div>
        </Message>
        <KakaoLoginButton>카카오톡으로 로그인</KakaoLoginButton>
        <LoginWrapper>
          <LoginLabel>이메일</LoginLabel>
          <LoginInput>
            <input type="text" placeholder="입력하기" />
          </LoginInput>
        </LoginWrapper>
        <LoginWrapper>
          <LoginLabel>비밀번호</LoginLabel>
          <LoginInput>
            <input type="text" placeholder="입력하기" />
          </LoginInput>
        </LoginWrapper>
        <LoginViaEmail>이메일로 로그인</LoginViaEmail>
      </Wrapper>
    </Container>
  );
};

export default Login;

const Container = styled.div``;

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: solid 1px #53595d;
  height: 6rem;
  > span {
    font-size: 1.5rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.21;
    letter-spacing: normal;
    text-align: left;
    color: #305f72;
  }
`;
const Wrapper = styled.div`
  padding: 0 1.688rem;
`;

const Message = styled.div`
  font-size: 1.625rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.54;
  letter-spacing: normal;
  text-align: center;
  color: #000000;
  margin-top: 11rem;
  margin-bottom: 1.25rem;
`;

const KakaoLoginButton = styled.div`
  width: 20.063rem;
  height: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: yellow;
  color: black;

  margin-bottom: 1.375rem;
  cursor: pointer;
`;

const LoginWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 0.438rem;
`;

const LoginLabel = styled.div`
  width: 5.938rem;
  height: 2.75rem;
  background-color: #eaf9fe;
  font-size: 1rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.81;
  letter-spacing: normal;
  text-align: center;
  color: #000000;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-right: 0.688rem;
`;

const LoginInput = styled.div`
  > input {
    width: 13.5rem;
    height: 2.75rem;
    background-color: #dce8ec;
    border: none;
    outline: none;
    padding-left: 1rem;
  }
`;
const LoginViaEmail = styled.div`
  width: 20.063rem;
  height: 2.063rem;
  background-color: #5aa6c8;

  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.81;
  letter-spacing: normal;
  text-align: center;
  color: #f6f3f3;

  margin: 0 auto;

  cursor: pointer;
`;
