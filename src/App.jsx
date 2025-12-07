import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../src/css/app.css";
import HomePage from "./pages/Homepage.jsx";
import CaseStudyDetail from "./components/CaseStudyDetail/CaseStudyDetail";
import { ThemeProvider } from "./ThemeContext";

function App() {
    useEffect(() => {
        document.title = "Caleb's Portfolio";
    }, []);

    return (
        <Router>
            <ThemeProvider>
                <div className="bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text min-h-screen">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/case-study/:id" element={<CaseStudyDetail />} />
                    </Routes>
                </div>
            </ThemeProvider>
        </Router>
    );
}

export default App;
