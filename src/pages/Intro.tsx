import { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/Intro/Header";
import LoginBackground from "../components/Intro/IntroBackground";
type IntroProps = {};

const Intro: FunctionComponent<IntroProps> = () => {
  const navigate = useNavigate();

  // const { Kakao } = window;

  const onClickLogInButtonHandler = () => {
    navigate("/logIn");
  };

  const onClickSignUpButtonHandler = () => {
    navigate("/signUp");
  };

  const onClickKakaoLogInButtonHandler = () => {
    const kakaoApiKey = import.meta.env.VITE_KAKAO_CLIENT_ID;
    const baseUrl = import.meta.env.VITE_FRONTEND_BASE_URL;
    const redirectUri = `${baseUrl}/kakaosignup`;
    const kakaoUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${kakaoApiKey}&redirect_uri=${redirectUri}&response_type=code&scope=account_email`;

    window.location.href = kakaoUrl;
  };

  return (
    <IntroWrapper>
      <Header />
      <IntroContainer>
        <IntroContentContainer>
          <LoginBackground></LoginBackground>
          <IntroMainContent></IntroMainContent>
        </IntroContentContainer>
        <LogInSignUpContainer>
          <LogInButton onClick={onClickLogInButtonHandler}>로그인</LogInButton>
          <KakaoLogInButton onClick={onClickKakaoLogInButtonHandler}>
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
  height: 100%;

  // background-image: url("https://wliv.kr/img/Intro-background-img.png");
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

const IntroMainContent = styled.p``;

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
