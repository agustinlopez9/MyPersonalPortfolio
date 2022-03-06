import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function Navbar(props) {
    const [langMenu, setLangMenu] = useState(false);
    const navRef = useRef();
    const [t, i18n] = useTranslation("global");

    useEffect(() => {
        const getScrollTop = () => {
            if (window.scrollY >= 15) {
                navRef.current.classList.remove("top-0");
                navRef.current.classList.add("-top-20");
            } else if (window.scrollY < 15) {
                navRef.current.classList.remove("-top-20");
                navRef.current.classList.add("top-0");
            }
        };

        window.addEventListener("scroll", getScrollTop);

        return () => window.removeEventListener("scroll", getScrollTop);
    });

    const handleChangeLanguage = (lang) => {
        i18n.changeLanguage(lang);
        localStorage.setItem("lang", lang);
        setLangMenu(false);
    };

    return (
        <nav
            className="fixed top-0 left-0 right-0 z-100 px-4 py-2 md:py-3 transition-all duration-200 ease-in-out bg-transparent text-white"
            ref={navRef}
        >
            <div className="flex flex-row justify-between items-center max-w-[1600px] mx-auto">
                <Link to="/">
                    <h1 className="flex flex-row items-center">
                        <img className="w-10 md:w-12" src={process.env.PUBLIC_URL + props.logourl} alt="logo.png" />
                        <span className="text-lg md:text-xl font-bold">{t("navbar.title")}</span>
                    </h1>
                </Link>
                <div className="relative flex flex-row items-center">
                    <div
                        onClick={() => setLangMenu(!langMenu)}
                        className="cursor-pointer mx-1 p-2 rounded-md bg-black bg-opacity-40"
                    >
                        <img
                            src={process.env.PUBLIC_URL + `/images/${i18n.language}.svg`}
                            className="w-6 md:w-8"
                            alt={i18n.language}
                        />
                    </div>
                    <ul
                        className={`m-2 p-1 md:p-2 absolute top-12 -right-2 text-center bg-black bg-opacity-40 rounded-md z-40 w-12 md:w-14 ${
                            langMenu ? "block" : "hidden"
                        }`}
                    >
                        <li onClick={() => handleChangeLanguage("es")} className="m-1 cursor-pointer">
                            <img src={process.env.PUBLIC_URL + "/images/es.svg"} alt="Español" />
                        </li>
                        <li onClick={() => handleChangeLanguage("en")} className="m-1 cursor-pointer">
                            <img src={process.env.PUBLIC_URL + "/images/en.svg"} alt="English" />
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
