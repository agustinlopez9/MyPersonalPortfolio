import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
import Projects from "./components/Projects/Projects";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import "./App.css";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./components/themes.js";

const StyledApp = styled.div`
    @media screen and (max-width: 768px) {
        .nav-links {
            color: #fff;
        }
        .nav-links:hover {
            color: ${(props) => props.theme.fontColorH3Main};
        }
    }
    nav {
        background-color: ${(props) => props.theme.body};
    }
    .menu-icon {
        color: ${(props) => props.theme.menuiconColor};
    }
    .navbar-logo {
        color: ${(props) => props.theme.title};
    }
    .nav-links::after {
        border-bottom: ${(props) => props.theme.underline};
    }
    .toggleDarkMode {
        color: ${(props) => props.theme.fontColorH3Main};
        border: ${(props) => props.theme.underline};
        &:hover {
            color: #fff;
            background-color: ${(props) => props.theme.fontColorH3Main};
        }
    }
    h2 {
        color: ${(props) => props.theme.fontColorH2Main};
    }
    #title-projects {
        color: ${(props) => props.theme.fontColorH2Projects};
    }
    h3 {
        color: ${(props) => props.theme.fontColorH3Main};
        border-bottom: ${(props) => props.theme.underline};
    }
    a {
        color: ${(props) => props.theme.fontColorAMain};
        &:hover {
            color: ${(props) => props.theme.fontColorH3Main};
        }
    }
    .projects-inner-div {
        background-color: ${(props) => props.theme.body};
    }
    .li-disabled {
        color: ${(props) => props.theme.fontColorH2Main};
        background-color: ${(props) => props.theme.body};
    }
    .card {
        background-color: ${(props) => props.theme.cardBackground};
        div {
            background-color: ${(props) => props.theme.cardBackground};
        }
    }
    .card-button-link {
        color: ${(props) => props.theme.fontColorAProjects};
        &:hover {
            color: ${(props) => props.theme.fontColorAProjects};
        }
    }
    .about-section a {
        color: ${(props) => props.theme.fontColorH3Main};
        border: ${(props) => props.theme.underline};
        &:hover {
            color: #fff;
            background-color: ${(props) => props.theme.fontColorH3Main};
        }
    }
    .about-section p {
        color: ${(props) => props.theme.fontColorP};
    }
    .info-block {
        background-color: ${(props) => props.theme.infoblockBackground};
        h4 {
            color: ${(props) => props.theme.fontColorH4Projects};
        }
        i {
            color: ${(props) => props.theme.fontColorH4Projects};
        }
    }
    .contact-ul {
        h4 {
            color: ${(props) => props.theme.fontColorH4Projects};
            border-bottom: ${(props) => props.theme.underlineH4Projects};
        }
        li {
            color: ${(props) => props.theme.fontColorP};
        }
    }
`;

function App() {
    const [theme, setTheme] = useState("dark");
    const themeToggler = () => {
        theme === "light" ? setTheme("dark") : setTheme("light");
    };
    //<button onClick={() => themeToggler()}>Change Theme</button>
    return (
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
            <GlobalStyles />
            <StyledApp className="App">
                <Navbar button={() => themeToggler()} text={theme === "light" ? "Dark mode" : "Light mode"} logourl={theme === "light" ? "/images/logo.png" : "/images/logo_white.png"} />
                <Main />
                <Projects />
                <About />
                <Footer />
            </StyledApp>
        </ThemeProvider>
    );
}

export default App;
