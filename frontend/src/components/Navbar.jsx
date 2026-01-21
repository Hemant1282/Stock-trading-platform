import logo from "../assets/logo (1).svg"
import "../styles/Navbar.css"

function Navbar() {
    return (
      <>
        <div className="nav">
          <img className="logo" src={logo} alt="logo" />
          <div className="nav-links">
            <a href="Signup">Signup</a>
            <a href="About">About</a>
            <a href="Products">Products</a>
            <a href="Pricing">Pricing</a>
            <a href="Support">Support</a>
            <i class="fa-solid fa-bars hamburger-menu"></i>
          </div>
        </div>
      </>
    );
}

export default Navbar;
