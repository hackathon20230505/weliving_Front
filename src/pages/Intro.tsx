import { FunctionComponent, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import Header from "../components/Intro/Header";
import LoginBackground from "../components/Intro/IntroBackground";
import { useCookies } from "react-cookie";
import { useRecoilState } from "recoil";
import { isPlayingState } from "../components/MainContent/atoms/MusicStatus";
import { isPlayingStateSecond } from "../components/MainContent/atoms/MusicStatusSecond";
type IntroProps = {};

const Intro: FunctionComponent<IntroProps> = () => {
  //

  const [, setIsPlaying] = useRecoilState(isPlayingState);
  const [, setIsPlayingSecond] = useRecoilState(isPlayingStateSecond);

  useEffect(() => {
    setIsPlaying(false);
    setIsPlayingSecond(false);
  }, []);

  //

  const navigate = useNavigate();
  const [, setCookie] = useCookies();
  const [cookies, ,] = useCookies(["skip_onboarding"]);

  // const { Kakao } = window;

  useEffect(() => {
    if (cookies.skip_onboarding === "0" || !cookies.skip_onboarding) {
      navigate("/OnBording");
    }
  }, []);

  const onClickLogInButtonHandler = () => {
    // 쿠키 저장
    const expires = new Date();
    expires.setFullYear(expires.getFullYear() + 1);

    setCookie("skip_onboarding", "1", {
      expires,
    });
    //
    navigate("/logIn");
  };

  const onClickSignUpButtonHandler = () => {
    navigate("/signUp");
  };

  const onClickKakaoLogInButtonHandler = () => {
    // 쿠키 저장
    const expires = new Date();
    expires.setFullYear(expires.getFullYear() + 1);

    setCookie("skip_onboarding", "1", {
      expires,
    });
    // 쿠키 저장
    const kakaoApiKey = import.meta.env.VITE_KAKAO_CLIENT_ID;

    let baseUrl: string;

    if (window.location.href.includes("localhost")) {
      baseUrl = "http://localhost:5173";
    } else {
      baseUrl = import.meta.env.VITE_FRONTEND_BASE_URL;
    }

    const redirectUri = `${baseUrl}/kakaosignin`;

    const kakaoUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${kakaoApiKey}&redirect_uri=${redirectUri}&response_type=code&scope=account_email`;

    window.location.href = kakaoUrl;
  };

  return (
    <IntroWrapper>
      <Header />
      <IntroBackgroundMain>
        <IntroBackground5
          src="https://welldie.com/img/intro/intro-door-light.png"
          style={{
            width: "100%",
            height: "100%",
            bottom: "0px",
            // left: "-7px",
            zIndex: "10",
          }}
        />
        <IntroContent0
          src="https://welldie.com/img/intro/intro-door.svg"
          style={{
            width: "100%",
            height: "100%",
            bottom: "0px",
            zIndex: "1",
          }}
        />
      </IntroBackgroundMain>
      <IntroContainer>
        <IntroContentContainer>
          <LoginBackground></LoginBackground>
          <IntroMainContent></IntroMainContent>
        </IntroContentContainer>
        <LogInSignUpContainer>
          <LogInButton onClick={onClickLogInButtonHandler}>로그인</LogInButton>
          <KakaoLogInButton onClick={onClickKakaoLogInButtonHandler}>
            <KaKaoIconImg
              src="https://welldie.com/img/kakao-icon.svg"
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

const IntroBackgroundMain = styled.div``;

const starKeyFrame = keyframes`
  0% { opacity: 0.7; }
  50% { opacity: 0.4; }
  100% { opacity: 0.7; }
`;

const IntroBackground5 = styled.img`
  position: absolute;
  animation: ${starKeyFrame} 2s ease-in-out infinite;
  display: flex;
  justify-content: space-around;
  pointer-events: none;
`;

const moonKeyFrame = keyframes`
  0% { opacity: 0; }
  50% { opacity: 0.5; }
  100% { opacity: 1; }
`;

const IntroContent0 = styled.img`
  position: absolute;
  animation: ${moonKeyFrame} 2s ease-in;
  display: flex;
  justify-content: space-around;
  pointer-events: none;
`;

const IntroWrapper = styled.main`
  width: 100%;
  height: 100%;

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
  bottom: 34px;
  width: 100%;
  z-index: 20;
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
