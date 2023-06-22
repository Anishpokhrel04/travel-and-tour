import "./navbar.scss";

import { useState } from "react";

//importing react icons
import { SiYourtraveldottv } from "react-icons/si";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";



const Navbar = () => {
  const [active, setActive] = useState('navbar');

  const [transparent, setTransparent] = useState("header");

//showing the navbar
  const showNav=()=>{
    setActive('navbar activeNavbar')
  }

  //Removing the navbar

  const removeNav =()=>{
    setActive("navbar")
  }

  const addBg = () => {
    if (window.scrollY >= 10) {
      setTransparent("header activeHeader");
    } else {
      setTransparent("header");
    }
  };
  window.addEventListener("scroll", addBg);
  return (
    <>
      <section className="navbarSection">
        <div className={transparent}>
          <div className="logoDiv">
            <a href="/" className="logo">
              <h1 className="flex">
                <SiYourtraveldottv className="icon" />
                Dot
              </h1>
            </a>
          </div>
          <div className={active}>
            <ul className="navLists flex">
              <li className="navItems">
                <a  className="navLink" href="">Home</a>
              </li>

              <li className="navItems">
                <a  className="navLink" href="">Products</a>
              </li>

              <li className="navItems">
                <a className="navLink" href="">Resource</a>
              </li>

              <li className="navItems">
                <a className="navLink" href="">Contact</a>
              </li>

              <li className="navItems">
                <a className="navLink" href="">Blog</a>
              </li>
            </ul>

            <div className="headerBtns">
              <button className="btn loginBtn">
                <a href="">Login</a>
              </button>

              <button className="btn">
                <a href="">Sign Up</a>
              </button>
            </div>
            <div onClick={removeNav} className="closeNavbar">
              <AiFillCloseCircle className="icon" />
            </div>
            
          </div>
          

            <div onClick={showNav} className="toggleNavbar">
              <TbGridDots className="icon" />
            </div>
        </div>
      </section>
    </>
  );
};

export default Navbar;
