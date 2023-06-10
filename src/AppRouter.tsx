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

type AppRouterProps = {};

const AppRouter: FunctionComponent<AppRouterProps> = () => {
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

        {/* 유서 작성 페이지 */}
        <Route path="/writeletter" element={<WriteLetter />} />

        {/* 유서 수정 페이지 */}
        <Route path="/modifyletter" element={<ModifyLetter />} />

        {/* 유서 작성 이후 페이지 */}
        <Route path="/afterwrite/:id" element={<AfterWrite />} />

        {/* GPT page */}
        <Route path="/getanswergpt" element={<GetAnswerGPT />} />

        <Route path="/yourhelp" element={<VerifyPhoneNumber />} />

        <Route path="/viewotherletterpost" element={<ViewOtherLetterPost />} />
      </Routes>
    </AppRouterContainer>
  );
};

export default AppRouter;

const AppRouterContainer = styled.div`
  height: 100%;
`;
