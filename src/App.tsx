import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./AppRouter";
import axios from "axios";
import { RecoilRoot } from "recoil";
import { setupInterceptors } from "./utils/interceptors/setupInterceptors";

axios.defaults.baseURL = "https://wliv.kr";

setupInterceptors(axios);

function App() {
  return (
    <RecoilRoot>
      <Router>
        <AppRouter />
      </Router>
    </RecoilRoot>
  );
}

export default App;
