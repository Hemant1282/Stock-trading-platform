import { useState } from "react";
import logo from "../assets/HomePageAssets/logo (1).svg"
import "../styles/Navbar.css"
import { Link } from "react-router-dom"
import HamburgerMenu from "../Logic/HamburgerMenu";

function Navbar() {
  const [isSelected,setIsSelected] = useState(false);
    return (
      <>
        <div className="nav">
          {isSelected == true ? <HamburgerMenu></HamburgerMenu> : null}
          <Link to="/">
            <img className="logo nav-logo" src={logo} alt="logo" />
          </Link>
          <div className="nav-links">
            <Link to="/signup">Signup</Link>
            <Link to="/about">About</Link>
            <Link to="/products">Products</Link>
            <Link to="/pricing">Pricing</Link>
            <Link to="/support">Support</Link>
            <i
              class={`fa-solid fa-bars hamburger-menu ${isSelected === true ? "open" : "close"}`}
              onClick={() => {
                setIsSelected(!isSelected);
              }}
            ></i>
          </div>
        </div>
      </>
    );
}

export default Navbar;
