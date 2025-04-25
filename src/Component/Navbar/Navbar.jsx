import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { Link } from "react-scroll";
import menu_icon from '../../assets/menu-icon.png'

const Navbar = () => {
  let [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setSticky(window.scrollY > 50);
    });
  }, []);

  const [mobileMenu, setMobileMenu] = useState(false);

  const toogleMenu = () => {
    mobileMenu?setMobileMenu(false):setMobileMenu(true)
  }

  return (
    <nav className={`container ${sticky ? "dark-nav" : ""}`}>
      <img className="logo" src={logo} alt="logo" />
      <ul className={mobileMenu?'':'hide-mobile-menu'}>
        <li>
          <Link to="Hero" smooth={true} offset={0} duration={500}>Home</Link>
        </li>
        <li>
          <Link to="About" smooth={true} offset={-200} duration={500}>About us</Link>
        </li>
        <li>
          <Link to="Shop" smooth={true} offset={-185} duration={500}>Products</Link>
        </li>
        <li>
          <Link to="Testimonial" smooth={true} offset={-260} duration={500}>Testimonials</Link>
        </li>
        <li>
          <button className="btn">
            <Link to="Contact" smooth={true} offset={-260} duration={500}>Contact us</Link>
          </button>
        </li>
      </ul>
      <img src={menu_icon} alt="" className="menu" onClick={toogleMenu}/>
    </nav>
  );
};

export default Navbar;
