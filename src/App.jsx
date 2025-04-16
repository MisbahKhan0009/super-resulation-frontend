import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaHome, FaImage, FaBook, FaUsers, FaMoon, FaSun } from "react-icons/fa";
import { useState } from "react";
import Home from "./pages/Home";
import Demo from "./pages/Demo";
import About from "./pages/About";
import Team from "./pages/Team";
import Footer from "./components/Footer";

function App() {
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("light");
  };

  return (
    <Router>
      <div className={`min-h-screen ${isDark ? "dark" : ""}`}>
        <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
          <nav className="fixed top-0 w-full bg-white/50 dark:bg-black/50 backdrop-blur-lg border-b border-black/10 dark:border-white/10 z-50">
            <div className="container mx-auto px-4 py-4">
              <div className="flex justify-between items-center">
                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="text-2xl font-bold">
                  SuperRes
                </motion.div>
                <div className="flex items-center gap-6">
                  <Link to="/" className="flex items-center gap-2 hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                    <FaHome /> Home
                  </Link>
                  <Link to="/demo" className="flex items-center gap-2 hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                    <FaImage /> Demo
                  </Link>
                  <Link to="/about" className="flex items-center gap-2 hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                    <FaBook /> About
                  </Link>
                  <Link to="/team" className="flex items-center gap-2 hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                    <FaUsers /> Team
                  </Link>
                  <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                    {isDark ? <FaSun className="text-xl" /> : <FaMoon className="text-xl" />}
                  </button>
                </div>
              </div>
            </div>
          </nav>
          <div className="pt-20">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/demo" element={<Demo />} />
              <Route path="/about" element={<About />} />
              <Route path="/team" element={<Team />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
