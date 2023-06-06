import { FunctionComponent } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Intro from "./pages/Intro";
import LogIn from "./pages/LogIn";
import axios from "axios";
import styled from "styled-components";
import Error404 from "./pages/Error404";
import SignUp from "./pages/SignUp";
type AppRouterProps = {};

const AppRouter: FunctionComponent<AppRouterProps> = () => {
  const token = axios.defaults.headers.common["Authorization"];

  return (
    <AppRouterContainer>
      <Routes>
        {/* access token이 있을 시 Home 화면, 없을 시 Intro 화면 표시 */}
        <Route path="*" element={<Error404 />} />
        <Route path="/" element={token ? <Home /> : <Intro />} />
        <Route path="/logIn" element={<LogIn />} />
        <Route path="/signUp" element={<SignUp />} />
      </Routes>
    </AppRouterContainer>
  );
};

export default AppRouter;

const AppRouterContainer = styled.div``;
