import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./AppRouter";
import axios from "axios";
import { RecoilRoot } from "recoil";
import { setupInterceptors } from "./utils/interceptors/setupInterceptors";
import { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

axios.defaults.baseURL = "https://wliv.kr";

setupInterceptors(axios);

function App() {
  function setScreenSize() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }

  useEffect(() => {
    setScreenSize();

    window.addEventListener("resize", setScreenSize);
    return () => {
      window.removeEventListener("resize", setScreenSize);
    };
  });

  // Create a client
  const queryClient = new QueryClient();

  return (
    <RecoilRoot>
      {/* Provide the client to your App */}
      <QueryClientProvider client={queryClient}>
        {/* React-query 개발자 도구 */}
        <ReactQueryDevtools />
        <Router>
          <AppRouter />
        </Router>
      </QueryClientProvider>
    </RecoilRoot>
  );
}

export default App;
