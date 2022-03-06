import React, { useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { AppItems, WebItems } from "./ProjectItems";
import StyledLinkRight from "./../common/StyledLinkRight";
import StyledLinkLeft from "../common/StyledLinkLeft";

function Card(props) {
    const [hover, setHover] = useState(false);
    const videoRef = useRef();
    const handleClick = () => setHover(!hover);
    const [t] = useTranslation("global");

    function play() {
        videoRef.current.currentTime = 0;
        videoRef.current.play();
    }
    function pause() {
        videoRef.current.currentTime = 0;
        videoRef.current.pause();
    }

    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            onMouseEnter={() => {
                handleClick();
                play();
            }}
            onMouseLeave={() => {
                handleClick();
                pause();
            }}
            className={`flex flex-col w-[245px] sm:w-[265px] lg:w-[300px] relative m-2 text-white text-center bg-slate-700 rounded-sm ${props.index}`}
            key={props.index}
        >
            <div className="min-h-[164px]">
                <img src={process.env.PUBLIC_URL + props.url} alt={props.url} className={`thumb-img`} />
            </div>
            <div className="relative pt-0 pb-2 sm:pt-1 sm:pb-2 lg:p-4">
                <h4>{t(props.name)}</h4>
                <div className="flex flex-row pt-1 pb-2 lg:pt-2 lg:pb-1 justify-center">
                    {Object.entries(props.toolsused).map(([key, value], index) => {
                        return <img width="32px" className="m-1" src={value} alt={key} key={index} />;
                    })}
                </div>
                {hover && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ ease: "easeInOut", duration: 0.2 }}
                        className={`absolute bg-slate-700 left-0 right-0 p-2 shadow-lg`}
                    >
                        {/* ${hover ? "block" : "hidden"} */}
                        <p className="m-2 mt-0  text-sm md:text-base">{t(props.desc)}</p>
                        <div className="flex flex-col">
                            <a target="_blank" rel="noopener noreferrer" href={props.pagelink} className="btn">
                                {t(props.pagetitle)}
                            </a>
                            <a target="_blank" rel="noopener noreferrer" href={props.gitlink} className="btn">
                                {t("projects.github")}
                            </a>
                        </div>
                    </motion.div>
                )}
            </div>
            <video ref={videoRef} muted={true} controls={false} className={`thumb-video ${hover ? "block" : "hidden"}`}>
                <source src={process.env.PUBLIC_URL + props.video} type="video/mp4"></source>
            </video>
        </motion.div>
    );
}
export default function Projects() {
    return (
        <div
            /*             initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ ease: "easeInOut", duration: 0.2 }} */
            className="flex flex-col my-[80px] pb-[100px] sm:pb-[160px] md:pb-[100px] md:px-[150px] justify-center items-center min-h-screen"
            id="projects"
        >
            <StyledLinkLeft title="navigation.home" link="/home" />
            <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 1 }}
                transition={{ ease: "easeInOut", duration: 0.2 }}
                className="text-2xl text-white m-4 p-2 bg-black/50 rounded-sm"
            >
                My Projects
            </motion.h2>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ ease: "easeInOut", duration: 0.2, delay: 0.15 }}
                className="flex flex-col items-center justify-center flex-wrap pb-[75px] sm:pb-2 p-2 lg:p-4 m-2 bg-black bg-opacity-50 max-w-[1366px] rounded-sm"
            >
                <h3 className="inline-block text-xl text-white m-4 border-b-2 border-white">Webs</h3>
                <div className="flex flex-row flex-wrap justify-center">
                    {WebItems.map((item, index) => {
                        return (
                            <Card
                                key={index}
                                desc={item.desc}
                                toolsused={item.toolsused}
                                name={item.title}
                                index={item.index}
                                url={item.url}
                                video={item.video}
                                pagetitle={item.pagetitle}
                                gitlink={item.gitlink}
                                pagelink={item.pagelink}
                            />
                        );
                    })}
                </div>
                <h3 className="inline-block text-xl text-white m-4 border-b-2 border-white">Apps</h3>
                <div className="flex flex-row flex-wrap justify-center">
                    {AppItems.map((item, index) => {
                        return (
                            <Card
                                key={index}
                                desc={item.desc}
                                toolsused={item.toolsused}
                                name={item.title}
                                index={item.index}
                                url={item.url}
                                video={item.video}
                                pagetitle={item.pagetitle}
                                gitlink={item.gitlink}
                                pagelink={item.pagelink}
                            />
                        );
                    })}
                </div>
            </motion.div>
            <StyledLinkRight link="/about-me" title="navigation.about" />
        </div>
    );
}
