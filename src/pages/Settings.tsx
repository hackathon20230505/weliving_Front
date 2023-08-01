import { FunctionComponent } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import PageContainer from "../components/Common/PageContainer";
import CommonContentContainer from "../components/Common/CommonContentContainer";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { isPlayingState } from "../components/MainContent/atoms/MusicStatus";
import { isPlayingStateSecond } from "../components/MainContent/atoms/MusicStatusSecond";

type SettingsProps = {};

const Settings: FunctionComponent<SettingsProps> = () => {
  const [, setIsPlaying] = useRecoilState(isPlayingState);
  const [, setIsPlayingSecond] = useRecoilState(isPlayingStateSecond);

  useEffect(() => {
    setIsPlaying(false);
    setIsPlayingSecond(false);
  }, []);

  const navigate = useNavigate();
  const [, setCookie] = useCookies();
  const onClickLogInButtonHandler = () => {
    const expires = new Date();
    expires.setFullYear(expires.getFullYear() + 1);

    setCookie("skip_onboarding", "0", {
      expires,
    });
  };

  const onClickLogInButton = () => {
    navigate("/Onbording");
  };
  const onClickLogInButton1 = () => {
    navigate("/Intro");
  };
  const onClickLogInButton2 = () => {
    navigate("/MainContentFirst");
  };
  const onClickLogInButton3 = () => {
    navigate("/MainContentSecond");
  };
  const onClickLogInButton4 = () => {
    navigate("/WriteCard");
  };
  const onClickLogInButton5 = () => {
    navigate("/WriteLetter");
  };
  const onClickLogInButton6 = () => {
    navigate("/getanswergpt");
  };
  const onClickLogInButton7 = () => {
    navigate("/viewotherletter");
  };
  const onClickLogInButton8 = () => {
    navigate("/ViewMyLetter");
  };
  const onClickLogInButton9 = () => {
    navigate("/signup");
  };
  const onClickLogInButton10 = () => {
    navigate("/changeuserinfo");
  };
  const onClickLogInButton11 = () => {
    navigate("/MeditationList");
  };

  return (
    <>
      <PageContainer>
        <CommonContentContainer xPadding="5%">
          <br></br>
          <LogInButton onClick={onClickLogInButtonHandler}>
            온보딩 쿠키 초기화
          </LogInButton>

          <LogInButton onClick={onClickLogInButton}>
            온보딩 페이지 이동
          </LogInButton>

          <LogInButton onClick={onClickLogInButton1}>
            인트로 페이지 이동
          </LogInButton>

          <LogInButton onClick={onClickLogInButton11}>명상 듣기</LogInButton>

          <LogInButton onClick={onClickLogInButton2}>첫 메인컨텐츠</LogInButton>
          <LogInButton onClick={onClickLogInButton3}>
            두번째 메인컨텐츠
          </LogInButton>

          <LogInButton onClick={onClickLogInButton4}>카드 작성</LogInButton>

          <LogInButton onClick={onClickLogInButton5}>
            마음챙김 글쓰기 작성
          </LogInButton>

          <LogInButton onClick={onClickLogInButton6}>
            글쓰기 결과(GPT)
          </LogInButton>

          <LogInButton onClick={onClickLogInButton7}>
            글 리스트 보기
          </LogInButton>

          <LogInButton onClick={onClickLogInButton8}>내글보기</LogInButton>

          <LogInButton onClick={onClickLogInButton9}>회원가입</LogInButton>

          <LogInButton onClick={onClickLogInButton10}>
            개인정보 변경
          </LogInButton>
        </CommonContentContainer>
      </PageContainer>
    </>
  );
};

export default Settings;

const LogInButton = styled.button`
  width: 100%;
  height: 56px;

  margin-bottom: 12px;

  background-color: #b20fdb;
  border-radius: 4px;

  font-weight: 700;


  }
`;
