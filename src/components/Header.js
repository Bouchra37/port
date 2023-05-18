import React, { useState } from "react";
import "./header.css";
import DayNightMood from "./DayNightMood";

const Header = () => {
  // fixed Header
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    header.classList.toggle("active", window.scrollY > 100);
  });

  // Toggle Menu
  const [Mobile, setMobile] = useState(false);

  return (
    <>
      <header className="header">
        <div className="container d_flex">
          <div className="logo">
            <span className="circle">
              <strong>BE</strong>

            </span>

          </div>

        
          <div className='navlink'>
            <ul className={Mobile ? "nav-links-mobile" : "link f_flex uppercase"} onClick={() => setMobile(false)}>
            <DayNightMood />

              {/*<ul className='link f_flex uppercase {Mobile ? "nav-links-mobile" : "nav-links"} onClick={() => setMobile(false)}'>*/}
              <li>
                <a href='#home'>home</a>
              </li>
            
              <li>
                <a href='#formations'>Formations </a>
              </li>
              <li>
                <a href='#certificats'>Certificats</a>
              </li>
              <li>
                <a href='#projects'>Projects</a>
              </li>
            </ul>

            <button className='toggle' onClick={() => setMobile(!Mobile)}>
              {Mobile ? <i className='fas fa-times close home-btn'></i> : <i className='fas fa-bars open'></i>}
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
