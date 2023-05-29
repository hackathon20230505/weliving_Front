import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./AppRouter";
import axios from "axios";

axios.defaults.baseURL = "https://welldie.com";

function App() {
  return (
    <div className="App">
      <Router>
        <AppRouter />
      </Router>
    </div>
  );
}

export default App;
