import { FunctionComponent } from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
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
type AppRouterProps = {};

const AppRouter: FunctionComponent<AppRouterProps> = () => {
  const token = axios.defaults.headers.common["Authorization"];

  return (
    <AppRouterContainer>
      <Routes>
        {/* 404 에러 화면 */}
        <Route path="*" element={<Error404 />} />

        {/* access token이 있을 시 Home 화면, 없을 시 Intro 화면 표시 */}
        <Route path="/" element={token ? <Home /> : <Intro />} />

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
      </Routes>
    </AppRouterContainer>
  );
};

export default AppRouter;

const AppRouterContainer = styled.div``;
