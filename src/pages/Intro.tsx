import { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/Intro/Header";
type IntroProps = {};

const Intro: FunctionComponent<IntroProps> = () => {
  const navigate = useNavigate();
  const onClickLogInButtonHandler = () => {
    navigate("/logIn");
  };

  const onClickSignUpButtonHandler = () => {
    navigate("/signUp");
  };
  return (
    <IntroWrapper>
      <Header />
      <IntroContainer>
        <IntroContentContainer>
          <IntroMainContent>
            이곳은 <br />
            이승과 저승의 경계입니다.
          </IntroMainContent>
          <IntroSubContent>아래의 방명록을 작성해주세요.</IntroSubContent>
        </IntroContentContainer>
        <LogInSignUpContainer>
          <LogInButton onClick={onClickLogInButtonHandler}>로그인</LogInButton>
          <KakaoLogInButton>
            <KaKaoIconImg
              src="https://wliv.kr/img/kakao-icon.svg"
              alt="카카오 아이콘"
            />
            카카오로 로그인
          </KakaoLogInButton>
          <SignUpButton onClick={onClickSignUpButtonHandler}>
            가입하기
          </SignUpButton>
        </LogInSignUpContainer>
      </IntroContainer>
    </IntroWrapper>
  );
};

export default Intro;

const IntroWrapper = styled.main`
  width: 100%;
  height: 100vh;

  background-image: url("https://wliv.kr/img/intro-background-img.png");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const IntroContainer = styled.div`
  color: var(--white);
`;

const IntroContentContainer = styled.div`
  padding: 0 27px;
  position: absolute;
  top: 20%;
`;

const IntroMainContent = styled.p`
  margin-bottom: 6px;

  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
`;

const IntroSubContent = styled.p`
  color: var(--light-gray);
  font-size: 14px;
`;

const LogInSignUpContainer = styled.div`
  padding: 0 20px;
  position: absolute;
  bottom: 74px;
  width: 100%;

  display: flex;
  flex-direction: column;
`;

const LogInButton = styled.button`
  width: 100%;
  height: 56px;

  margin-bottom: 12px;

  background-color: var(--main-color);
  border-radius: 4px;

  font-weight: 700;
`;

const KakaoLogInButton = styled.button`
  width: 100%;
  height: 56px;

  margin-bottom: 12px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #feeb00;
  border-radius: 4px;

  color: #111111;
  font-weight: 700;
`;

const KaKaoIconImg = styled.img`
  color: #111111;
  margin-right: 8px;
`;

const SignUpButton = styled.button`
  height: 56px;
  border: 1px solid var(--strong-purple-800);
  border-radius: 4px;

  font-weight: 700;
`;
