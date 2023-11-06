import React, { useState, useEffect } from "react";
import "./App.css";
import logo from "../logo.png";

export function Navbar() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Set title, description, and image from props
  }, []);
  function Logo() {
    return(
      <img className="logo"
       src={logo} />
    )
  }

  return (
    <header>
        <nav className="nav">
          <div>
          <Logo/>
          </div>
          <a href="/home" >Home</a>
          <a href="/about" >About</a>
          <a href="/contact" >Contact</a>
        </nav>
    </header>
  );
};
