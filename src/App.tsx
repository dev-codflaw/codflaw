import { BrowserRouter as Router, Routes, Route, Navigate, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";    
import About from "./pages/About";
import TermsOfService from "./pages/TermsOfService";
import PrivacyPolicy from "./pages/PrivacyPolicy";

function App() {
  return (
    <Router>
      <div className="h-screen w-full bg-black text-white overflow-x-hidden">
        {/* Navbar */}
        <Navbar />
        <br/><br/>

        {/* Page Content */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/projects" 
          element={<Navigate to="https://blog.codflaw.com/projects/" replace />} />
          <Route path="/blog" 
          element={<Navigate to="https://blog.codflaw.com/blog/" replace />} />
          <Route path="/about" element={<About />} />
        </Routes>

<br/><br/>
        {/* Footer */}
        <div className="fixed bottom-0 w-full text-center text-gray-500 text-sm bg-black bg-opacity-75 py-2">
          &copy; 2025 Codflaw. All rights reserved.
          <Link to="/privacy-policy" className="ml-4 text-gray-400 hover:text-gray-300">Privacy Policy</Link> 
          <Link to="/terms-of-service" className="ml-4 text-gray-400 hover:text-gray-300">Terms of Service</Link>
        </div>
      </div>
    </Router>
  );
}

export default App;
