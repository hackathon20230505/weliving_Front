import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./AppRouter";
import axios from "axios";
import { RecoilRoot } from "recoil";

axios.defaults.baseURL = "https://wliv.kr";

function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <Router>
          <AppRouter />
        </Router>
      </RecoilRoot>
    </div>
  );
}

export default App;
