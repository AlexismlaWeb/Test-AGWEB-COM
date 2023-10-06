import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import LogInPage from "./components/LogInPage";
import SignUpPage from "./components/SignUpPage";
import HomePage from "./components/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignUpPage />} />
        <Route path="/logIn" element={<LogInPage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
