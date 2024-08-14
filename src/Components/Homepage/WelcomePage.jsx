import "./WelcomePage.css";

import React from "react";
import logo from "../../Images/EndpixelLarge.png";

export default function WelcomePage() {


  return (
    <>
      <div className="WelcomePageContainer">
        <div className="LogoContainer">
          <h1 className="text-center">Welcome to the EndPixel Forums</h1>
          <img src={logo} alt="EndPixel Logo" className="HomepageLogo" />
        </div>
        <div className="IntroContainer">
          <p>Your gateway to everything EndPixel. Start your adventure now!</p>
        </div>
        <div className="ButtonContainer">
          <button onClick={() => window.scrollTo({ top: 200, behavior: "smooth" })}>Scroll to Content</button>
          <button>Visit Store</button>
        </div>
      </div>
    </>
  );
}
