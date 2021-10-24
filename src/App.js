import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
import Projects from "./components/Projects/Projects";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
    return (
        <div className="App">
            <Navbar />
            <Main />
            <Projects />
            <About />
            <Footer />
        </div>
    );
}

export default App;
