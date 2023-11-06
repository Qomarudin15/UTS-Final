import React, { useState, useEffect } from "react";
import "./App.css";

const LandingPage = () => {
  
  const [image, setImage] = useState(null);
  

  useEffect(() => {
    // Set title, description, and image from props
  }, []);

  return (
    <div className="landing-page">
      <header>
        <img
          className="logo"
          src={image}
          style={{
            maxWidth: "100%",
            maxHeight: "100%",
            objectFit: "contain",
         
          }}
        />
      </header>
    </div>
  );
};

export default LandingPage;
