import React, { useState } from "react";
import { MainItems } from "./MainItems";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Main.css";

export default function Main() {
    const [img, setImg] = useState(false);
    return (
        <React.Fragment>
            {MainItems.map((item, index) => (
                <main id={item.scroll} key={"main"}>
                    <div key={index} className="main-inner-div">
                        <div className="profile-div" data-aos="fade-up">
                            <img src={item.thumbnail} alt={item.image} className={img ? "thumbnail hide" : "thumbnail show"}></img>
                            <img src={item.image} alt={item.image} onLoad={setImg} className={img ? "picture show" : "picture hide"}></img>
                        </div>
                        <h2 data-aos="fade-up" data-aos-delay="100">
                            {item.title}
                        </h2>
                        <h3 data-aos="fade-up" data-aos-delay="200">
                            {item.desc}
                        </h3>
                        <ul data-aos="fade-up" data-aos-delay="300" className="social-links" key={"social-links"}>
                            <li key={"linkedin"}>
                                <a href={item.linkedin} rel="noopener noreferrer" target="_blank">
                                    <i className="fab fa-linkedin"></i>
                                </a>
                            </li>
                            <li key={"github"}>
                                <a href={item.github} rel="noopener noreferrer" target="_blank">
                                    <i className="fab fa-github"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </main>
            ))}
        </React.Fragment>
    );
}

AOS.init({ once: true });
