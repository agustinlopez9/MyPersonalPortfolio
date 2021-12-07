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
                <p>
                    I'm a 22 years old student from Buenos Aires, Argentina and I'm currently learning the latest web
                    development technologies.
                </p>
                <a target="_blank" rel="noopener noreferrer" href="Lopez Piceda Agustin Fernando - Curriculum.pdf">
                    CV
                </a>
                <div className="information-div">
                    <h4 className="skills-title">Skills</h4>
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
                </div>
                <ul className="contact-ul">
                    <h4>Contact</h4>
                    <li>Email: fernandopiceda99@gmail.com</li>
                </ul>
            </section>
        </React.Fragment>
    );
}

/* AOS.init({ once: true });
 */
