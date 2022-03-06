import React, { useState } from "react";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import Main from "./components/Main/Main";
import { Route, Routes } from "react-router-dom";
import Projects from "./components/Projects/Projects";
import About from "./components/About/About";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import "./App.css";
import ScrollToTop from "./components/common/ScrollToTop";

function App() {
    const [theme, setTheme] = useState(window.localStorage.getItem("theme"));
    const location = useLocation();

    const themeToggler = () => {
        theme === "light" ? setTheme("dark") : setTheme("light");
    };
    const setLocalStorage = () => {
        try {
            themeToggler();
            window.localStorage.setItem("theme", theme === "light" ? "dark" : "light");
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="App min-h-[640px] overflow-x-hidden">
            <Navbar
                button={() => setLocalStorage()}
                text={theme === "light" ? "Dark mode" : "Light mode"}
                logourl={theme === "light" ? "/images/logo.png" : "/images/logo_white.png"}
            />
            <ScrollToTop>
                <AnimatePresence exitBeforeEnter>
                    <Routes location={location} key={location.pathname}>
                        <Route path="/MyPersonalPortfolio" element={<Main />} />
                        <Route path="/home" element={<Main />} />
                        <Route path="/about-me" element={<About />} />
                        <Route path="/my-projects" element={<Projects />} />
                        <Route path="/" element={<Main />} />
                    </Routes>
                </AnimatePresence>
            </ScrollToTop>
            <Footer />
        </div>
    );
}

export default App;
