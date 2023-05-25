import { FunctionComponent } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Intro from "./pages/Intro";
import LogIn from "./pages/LogIn";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import axios from "axios";
import styled from "styled-components";
type AppRouterProps = {};

const AppRouter: FunctionComponent<AppRouterProps> = () => {
  const token = axios.defaults.headers.common["Authorization"];

  return (
    <AppRouterContainer>
      <Header />
      <main>
        <Routes>
          {/* access token이 있을 시 Home 화면, 없을 시 Intro 화면 표시 */}
          <Route path="/" element={token ? <Home /> : <Intro />} />
          <Route path="/login" element={<LogIn />} />
        </Routes>
      </main>
      <Footer />
    </AppRouterContainer>
  );
};

export default AppRouter;

const AppRouterContainer = styled.div``;
