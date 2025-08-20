import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/home/Home";
import ObservabilityDetails from "./pages/observabilitydetails/ObservabilityDetails";
import LoginPage from "./panels/login/login-page";
import SignupPage from "./panels/signup/signup-page";
import ScrollToTop from "./helpers/scrolltotop";
function App() {
  return (
    <>
      <div className="w-full">
        <Router>
          <ScrollToTop />
          <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/details/:id" element={<ObservabilityDetails />} />{" "}
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
