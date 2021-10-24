import React, { useState, useRef } from "react";
import { AppItems, WebItems, DesignItems } from "./ProjectItems";
import "./Projects.css";

function Card(props) {
    const [hover, setHover] = useState(false);
    const videoRef = useRef();
    const handleClick = () => setHover(!hover);

    function play() {
        videoRef.current.play();
    }
    function pause() {
        videoRef.current.pause();
    }

    return (
        <React.Fragment>
            <div
                onMouseEnter={() => {
                    handleClick();
                    play();
                }}
                onMouseLeave={() => {
                    handleClick();
                    pause();
                }}
                className={props.class}
                key={props.index}
            >
                <img src={props.url} alt={props.url} className={hover ? "thumb-img" : "thumb-img active"} />
                <div>
                    <h4>{props.name}</h4>
                    <p className={hover ? "show" : "hide"}>
                        {props.desc}
                        <a target="_blank" rel="noopener noreferrer" href={props.pagelink} className="card-button-link">
                            Website
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href={props.gitlink} className="card-button-link">
                            GitHub
                        </a>
                    </p>
                </div>
                <video ref={videoRef} muted={true} controls={false} className={hover ? "thumb-video active" : "thumb-video"}>
                    <source src={props.video} type="video/mp4"></source>
                </video>
            </div>
        </React.Fragment>
    );
}
export default function Projects() {
    const [toggleTab, setToggleTab] = useState(0);
    return (
        <React.Fragment>
            <div className="projects-items" id="projects">
                <h2>My Projects</h2>
                <div className="projects-inner-div">
                    <ul className="menu-projects">
                        <li onClick={() => setToggleTab(0)} className={toggleTab === 0 ? "li-active" : "li-disabled"}>
                            Apps
                        </li>
                        <li onClick={() => setToggleTab(1)} className={toggleTab === 1 ? "li-active" : "li-disabled"}>
                            Websites
                        </li>
                        <li onClick={() => setToggleTab(2)} className={toggleTab === 2 ? "li-active" : "li-disabled"}>
                            Designs
                        </li>
                    </ul>
                    <div className={toggleTab === 0 ? "card-items active-content" : "card-items disabled-content"} id="apps">
                        {AppItems.map((item, index) => {
                            return <Card key={index} desc={item.desc} name={item.title} class={item.cName} url={item.url} video={item.video} gitlink={item.gitlink} pagelink={item.pagelink} />;
                        })}
                    </div>
                    <div className={toggleTab === 1 ? "card-items active-content" : "card-items disabled-content"} id="websites">
                        {WebItems.map((item, index) => {
                            return <Card key={index} desc={item.desc} name={item.title} class={item.cName} url={item.url} video={item.video} gitlink={item.gitlink} pagelink={item.pagelink} />;
                        })}
                    </div>
                    <div className={toggleTab === 2 ? "card-items active-content" : "card-items disabled-content"} id="design">
                        {DesignItems.map((item, index) => {
                            return <Card key={index} desc={item.desc} name={item.title} class={item.cName} url={item.url} video={item.video} gitlink={item.gitlink} pagelink={item.pagelink} />;
                        })}
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
