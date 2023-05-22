import { FunctionComponent } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Intro from "./pages/Intro";
import LogIn from "./pages/LogIn";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
type AppRouterProps = {};

const AppRouter: FunctionComponent<AppRouterProps> = () => {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/intro" element={<Intro />} />
          <Route path="/login" element={<LogIn />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default AppRouter;
