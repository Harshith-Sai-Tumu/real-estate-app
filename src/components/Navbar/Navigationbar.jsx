import { useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";

const Navigationbar = () => {
    const [open, setOpen] = useState(false);

    const toggleMenu = () => {
        setOpen(prevOpen => !prevOpen);
    };

    return (
        <nav>
            <div className="left">
                <a href="/" className="logo">
                    <img src="./logo.png" alt="" />
                    <span>Crestview Cornerstone</span>
                </a>
                <Link to="/">Home</Link>
                <a href="/">About</a>
                <a href="/">Contact</a>
                <a href="/">Agents</a>
            </div>
            <div className="right">
                <a href="/">Sign in</a>
                <a className="register" href="/">Sign up</a>
                <div className="menuIcon">
                    <img src="/menu.png" alt="" onClick={toggleMenu} />
                </div>
                <div className={open ? "menu active" : "menu"}>
                    <a href="/">Home</a>
                    <a href="/">About</a>
                    <a href="/">Contact</a>
                    <a href="/">Agents</a>
                    <a href="/">Sign in</a>
                    <a href="/">Sign up</a>
                </div>
            </div>
        </nav>
    );
};

export default Navigationbar;
