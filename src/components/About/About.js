import React from "react";
import { AboutItems } from "./AboutItems";
/* import AOS from "aos";
import "aos/dist/aos.css"; */
import "./About.css";

export default function About() {
    return (
        <React.Fragment>
            <section id="about" className="about-section">
                <h2>About Me</h2>
                <p>I'm a 21 years old student from Buenos Aires, Argentina studying to be a front-end developer.</p>
                <a target="_blank" rel="noopener noreferrer" href="Lopez Piceda Agustin Fernando - Curriculum.pdf">
                    CV
                </a>
                <div className="information-div">
                    <ul>
                        {AboutItems.map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                    <h4>
                                        <i className={item.icon}></i>
                                        {item.title}
                                    </h4>
                                    <p>{item.desc}</p>
                                </li>
                            );
                        })}
                    </ul>
                    <ul className="contact-ul">
                        <h4>Contact</h4>
                        <li>Number: 11 2188-0890</li>
                        <li>Email: fernandopiceda99@gmail.com</li>
                    </ul>
                </div>
            </section>
        </React.Fragment>
    );
}

/* AOS.init({ once: true });
 */
