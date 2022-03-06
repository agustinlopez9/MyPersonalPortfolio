import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Particles from "react-tsparticles";
import { ParticlesOptions } from "./ParticlesOptions";
import { motion } from "framer-motion";
import StyledLinkRight from "../common/StyledLinkRight";

export default function Main() {
    const [img, setImg] = useState(false);
    const [t] = useTranslation("global");

    return (
        <React.Fragment>
            <Particles id="tsparticles" options={ParticlesOptions} />
            <motion.main
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ ease: "easeInOut", duration: 0.2 }}
                key={"main"}
                className="background-animation z-50"
            >
                <div className="flex flex-col justify-center items-center w-full h-screen max-w-[1920px] mx-auto min-h-[540px] ">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ ease: "easeInOut", duration: 0.2 }}
                        className="w-48 h-48 m-2 rounded-full z-10"
                    >
                        <img
                            src={process.env.PUBLIC_URL + "/images/profile_photo_blur.png"}
                            alt={"profile_photo_blur"}
                            className={`${img ? "hidden" : "block"} rounded-full bg-black bg-opacity-50`}
                        />
                        <img
                            src={process.env.PUBLIC_URL + "/images/profile_photo.png"}
                            alt={"profile_photo"}
                            onLoad={() => setImg(true)}
                            className={`${img ? "block" : "hidden"} rounded-full bg-black bg-opacity-50 `}
                        />
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ ease: "easeInOut", duration: 0.2, delay: 0.1 }}
                        className="text-lg sm:text-xl text-white bg-black bg-opacity-40 px-2 py-1 rounded-md z-10"
                    >
                        {t("main.name")}
                    </motion.h2>
                    <motion.h3
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ ease: "easeInOut", duration: 0.2, delay: 0.2 }}
                        className="text-base sm:text-lg text-white bg-black bg-opacity-40 px-2 py-1 my-2 rounded-md z-10"
                    >
                        {t("main.subtitle")}
                    </motion.h3>
                    <motion.ul
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ ease: "easeInOut", duration: 0.2, delay: 0.3 }}
                        className="flex flex-row items-center justify-center bg-black bg-opacity-40 px-1 pt-0.5 rounded-md z-10"
                    >
                        <li
                            className="m-1 text-2xl sm:text-3xl text-white hover:text-slate-700 transition-all duration-200 ease-in-out"
                            key={"linkedin"}
                        >
                            <a href="https://github.com/AFLP2199" rel="noopener noreferrer" target="_blank">
                                <i className="fab fa-linkedin"></i>
                            </a>
                        </li>
                        <li
                            className="m-1 text-2xl sm:text-3xl text-white hover:text-slate-700 transition-all duration-200 ease-in-out"
                            key={"github"}
                        >
                            <a
                                href="https://www.linkedin.com/in/agustín-lópez-piceda-b556b41b8/"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                <i className="fab fa-github"></i>
                            </a>
                        </li>
                    </motion.ul>
                </div>
            </motion.main>
            <StyledLinkRight title={"navigation.projects"} link="/my-projects" />
        </React.Fragment>
    );
}
