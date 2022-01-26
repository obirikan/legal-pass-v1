import "./App.css";
import LandingPage from "./pages/Landing Page/LandingPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LearningCommons from "./pages/Learning Commons/LearningCommons";
import Profile from "./pages/Profile/Profile";
import Contribute from "./pages/Contribute/Contribute";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/lcommons" element={<LearningCommons />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/contribute" element={<Contribute />} />
      </Routes>
    </Router>
  );
}

export default App;
