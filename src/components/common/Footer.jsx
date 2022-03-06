import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser, faList } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

export default function Footer() {
    const [t] = useTranslation("global");

    return (
        <ul className="fixed left-0 bottom-0 right-0 text-sm flex md:hidden flex-row justify-center items-center text-white bg-slate-900 p-2 z-100">
            <Link to="/">
                <li className="flex flex-col justify-center text-center mx-2 w-[90px]">
                    <FontAwesomeIcon icon={faHome} className="m-2 block " />
                    <p>{t("navigation.home")}</p>
                </li>
            </Link>
            <Link to="my-projects">
                <li className="flex flex-col justify-center text-center mx-2 w-[90px]">
                    <FontAwesomeIcon icon={faList} className="m-2 block " />
                    <p>{t("navigation.projects")}</p>
                </li>
            </Link>
            <Link to="about-me">
                <li className="flex flex-col justify-center text-center mx-2 w-[90px]">
                    <FontAwesomeIcon icon={faUser} className="m-2 block " />
                    <p>{t("navigation.about")}</p>
                </li>
            </Link>
        </ul>
    );
}
