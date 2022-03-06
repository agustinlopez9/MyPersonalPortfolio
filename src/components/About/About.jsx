import React from "react";
import { AboutItems } from "./AboutItems";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import StyledLinkLeft from "../common/StyledLinkLeft";

export default function About() {
    const [t] = useTranslation("global");

    return (
        <React.Fragment>
            <StyledLinkLeft link="/my-projects" title="navigation.projects" />
            <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 40 }}
                transition={{ ease: "easeInOut", duration: 0.2 }}
                className="flex flex-col justify-center items-center min-h-screen p-2 md:px-[150px] mt-[75px] mb-[100px] sm:mt-[60px] sm:mb-[75px] text-white"
            >
                <h2 className="text-center text-xl md:text-2xl m-4 p-2 bg-black/50 rounded-sm">{t("about.aboutme")}</h2>
                <section
                    id="about"
                    className="text-center bg-black bg-opacity-60 rounded-md p-2 md:p-8 m-4 w-full max-w-[1200px] shadow-lg"
                >
                    <p className="text-center text-base md:text-lg px-2 py-4">{t("about.info")}</p>
                    <a
                        target="_blank"
                        className="inline-block font-semibold text-base md:text-lg text-slate-700 mx-auto px-4 py-2 my-2
                            hover:bg-slate-700 hover:text-white border-2 border-slate-700 transition-all duration-200 ease-in-out"
                        rel="noopener noreferrer"
                        href={process.env.PUBLIC_URL + t("about.cvlink")}
                    >
                        CV
                    </a>
                    <div className="flex flex-col justify-center items-start lg:flex-row">
                        <div className="p-2 w-full lg:w-1/2">
                            <h4 className="inline-block text-lg md:text-xl m-2 border-b-2 border-white">
                                {t("about.skills")}
                            </h4>
                            <ul>
                                {AboutItems.map((item, index) => {
                                    return (
                                        <li
                                            key={index}
                                            className="bg-slate-700 p-2 m-2 text-white rounded-md text-base"
                                        >
                                            <span className="flex flex-row justify-center items-center text-base  md:text-lg font-semibold m-1">
                                                <img src={item.icon} className="w-6 md:w-8 mx-2" alt={item.title} />
                                                {t(`about.${item.title}.title`)}
                                            </span>
                                            <p className="font-medium"> {t(`about.${item.title}.desc`)}</p>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                        <ul className="p-2 w-full lg:w-1/2">
                            <h4 className="inline-block text-lg md:text-xl m-2 border-b-2 border-white">
                                {t("about.contact")}
                            </h4>
                            <li className="bg-slate-700 p-2 m-2 text-white rounded-md">
                                <span className="font-semibold text-base md:text-lg">Email: </span>
                                fernandopiceda99@gmail.com
                            </li>
                        </ul>
                    </div>
                </section>
            </motion.div>
        </React.Fragment>
    );
}

/* AOS.init({ once: true });
 */
