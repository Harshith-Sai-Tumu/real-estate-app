import { useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";

const Navigationbar = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  const user = true;
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
        {user ? (
          <div className="user">
            <img
              src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
            />
            <span>John Doe</span>
            <Link to="/profile" className="profile">
              <div className="notification">3</div>
              <span>Profile</span>
            </Link>
          </div>
        ) : (
          <>
            <Link to="/login">Sign in</Link>
            <Link a="/register" className="register">
              Sign up
            </Link>
          </>
        )}
        <div className="menuIcon">
          <img src="/menu.png" alt="" onClick={toggleMenu} />
        </div>
        <div className={open ? "menu active" : "menu"}>
          <Link to="/">Home</Link>
          <Link to="/">About</Link>
          <Link to="/">Contact</Link>
          <Link to="/">Agents</Link>
          <Link to="/login">Sign in</Link>
          <Link to="/register">Sign up</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigationbar;
