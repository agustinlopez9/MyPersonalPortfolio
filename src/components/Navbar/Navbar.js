import React, { useState } from "react";
import { MenuItems } from "./MenuItems";
import "./Navbar.css";

export default function Navbar() {
    const [state, setState] = useState(false);

    return (
        <React.Fragment>
            <nav className="NavbarItems">
                <div className="navbar-inner">
                    <h1 className="navbar-logo">
                        <img src={process.env.PUBLIC_URL + "/images/logo.png"} alt="logo.png" />
                        <span>My Portfolio</span>
                    </h1>
                    <ul className={state ? "nav-menu active" : "nav-menu"}>
                        {MenuItems.map((item, index) => {
                            return (
                                <li key={index}>
                                    <a className={item.cName} href={item.url} onClick={() => setState(!state)}>
                                        {item.title}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                    <div className="menu-icon" onClick={() => setState(!state)}>
                        <i className={state ? "fas fa-times" : "fas fa-bars"}></i>
                    </div>
                </div>
            </nav>
        </React.Fragment>
    );
}

/* class Navbar extends Component {
    state = { clicked: false };

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked });
    };
    render() {
        return (
            <nav className="NavbarItems">
                <div className="navbar-inner">
                    <h1 className="navbar-logo">My Portfolio</h1>
                    <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
                        {MenuItems.map((item, index) => {
                            return (
                                <li key={index}>
                                    <a className={item.cName} href={item.url} onClick={() => this.handleClick()}>
                                        {item.title}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                    <div className="menu-icon" onClick={this.handleClick}>
                        <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;
 */
