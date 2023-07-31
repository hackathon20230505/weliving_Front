import { FunctionComponent } from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Home from "./pages/Home";
import Intro from "./pages/Intro";
import LogIn from "./pages/LogIn";
import Error404 from "./pages/Error404";
import SignUp from "./pages/SignUp";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import FindPW from "./pages/FindPW";
import KakaoSignUp from "./pages/KakaoSignUp";
import KakaoSignIn from "./pages/KakaoSignIn.tsx";
import ChangePW from "./pages/ChangePW";
import ChangeUserInfo from "./pages/ChangeUserInfo";
import ViewMyLetter from "./pages/ViewMyLetter";
import ViewOtherLetter from "./pages/ViewOtherLetter";
import WriteLetter from "./pages/WriteLetter";
import AfterWrite from "./pages/AfterWrite";
import OnBording from "./pages/OnBording";
import MainContentFirst from "./pages/MainContentFirst";
import MainContentSecond from "./pages/MainContentSecond";
import WriteCard from "./pages/WriteCard.tsx";
import ModifyLetter from "./pages/ModifyLetter";
import ViewOtherLetterPost from "./pages/ViewOtherLetterPost.tsx";
import { GetAnswerGPT } from "./pages/GetAnswerGPT.tsx";
import VerifyPhoneNumber from "./pages/VerifyPhoneNumber.tsx";
import MeditationList from "./pages/MeditationList";
import MeditationPlay from "./pages/MeditationPlay.tsx";
import MeditationStart from "./pages/MeditationStart.tsx";
import Settings from "./pages/Settings.tsx";

// type AppRouterProps = {};

const AppRouter: FunctionComponent = () => {
  const token = localStorage.getItem("accessToken");

  return (
    <AppRouterContainer>
      <Routes>
        {/* 404 에러 화면 */}
        <Route path="*" element={<Error404 />} />

        {/* ------- OnBoarding Pages ------- */}
        {/* OnBordding */}
        <Route path="/onbording" element={<OnBording />} />

        {/* MainContentFirst */}
        <Route path="/maincontentfirst" element={<MainContentFirst />} />

        {/* MainContentSecond */}
        <Route path="/maincontentsecond" element={<MainContentSecond />} />

        {/* MainContentCard */}
        <Route path="/writecard" element={<WriteCard />} />

        {/* 새싹톤용 쿠키 초기화 페이지 */}
        <Route path="/setting" element={<Settings />} />

        {/* ------------------------------- */}

        {/* access token이 있을 시 Home 화면, 없을 시 Intro 화면 표시 */}
        <Route path="/" element={token !== null ? <Home /> : <Intro />} />

        <Route path="/Intro" element={<Intro />} />

        {/* 로그인 페이지 */}
        <Route path="/logIn" element={<LogIn />} />

        {/* 회원가입 페이지 */}
        <Route path="/signUp" element={<SignUp />} />

        {/* 카카오톡 회원가입 페이지 */}
        <Route path="/kakaosignup" element={<KakaoSignUp />} />

        {/* 카카오톡 회원가입 두번째 페이지 */}
        <Route path="/kakaosignin" element={<KakaoSignIn />} />

        {/* 개인정보 처리방침 동의 페이지 */}
        <Route path="/privacy" element={<PrivacyPolicy />} />

        {/* 이용약관 동의 페이지 */}
        <Route path="/termsofservice" element={<TermsOfService />} />

        {/* 비밀번호 찾기 페이지 */}
        <Route path="/findpw/:id" element={<FindPW />} />

        {/* 비밀번호 변경 페이지 */}
        <Route path="/changepw" element={<ChangePW />} />

        {/* 회원 정보 변경 페이지 */}
        <Route path="/changeuserinfo" element={<ChangeUserInfo />} />

        {/* 내 일지 보기 페이지 */}
        <Route path="/viewmyletter" element={<ViewMyLetter />} />

        {/* 다른 일지 보기 페이지 */}
        <Route path="/viewotherletter" element={<ViewOtherLetter />} />

        {/* 다른 일지 보기 상세 페이지 */}
        <Route path="/viewotherletter/:id" element={<ViewOtherLetterPost />} />

        {/*  일지 작성 페이지 */}
        <Route path="/writeletter" element={<WriteLetter />} />

        {/*  일지 수정 페이지 */}
        <Route path="/modifyletter" element={<ModifyLetter />} />

        {/*  일지 작성 이후 페이지 */}
        <Route path="/afterwrite/:id" element={<AfterWrite />} />

        {/* GPT page */}
        <Route path="/getanswergpt" element={<GetAnswerGPT />} />

        {/* ------------------------------- */}

        {/* 명상 리스트 페이지 */}
        <Route path="/meditationlist" element={<MeditationList />} />

        {/* 명상 체험 페이지 */}
        <Route path="/meditationPlay/:id" element={<MeditationPlay />} />

        {/* 명상 체험 페이지 */}
        <Route path="/meditationStart/:id" element={<MeditationStart />} />

        <Route path="/yourhelp" element={<VerifyPhoneNumber />} />
      </Routes>
    </AppRouterContainer>
  );
};

export default AppRouter;

const AppRouterContainer = styled.div`
  height: 100%;
`;
