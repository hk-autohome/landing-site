import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import PrivacyPolicy from "./pages/PrivacyPolicy.tsx";
import "./App.css";
import TermsOfService from "./pages/TermsOfService.tsx";
import HomePage from "./pages/HomePage.tsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/privacy-policy" element={<PrivacyPolicy/>}/>
        <Route path="/terms-of-service" element={<TermsOfService/>}/>
      </Routes>
    </Router>
  );
}

export default App;
