import React from "react";
import logo from "../../Images/EndpixelLarge.png";
import "./WelcomePage.css";

export default function WelcomePage() {
	return (
		<>
			<div className="WelcomePageContainer">
				<div className="LogoContainer">
					<img src={logo} alt="EndPixel Logo" className="HomepageLogo" />
				</div>

				<h1 className="text-center">Welcome to the EndPixel Forums</h1>

				<div className="IntroContainer">
					<p>Your gateway to everything EndPixel. Start your adventure now!</p>
				</div>

				<div className="ButtonContainer">
					<button
						onClick={() => window.scrollTo({ top: 350, behavior: "smooth" })}
					>
						Scroll to Content
					</button>
					<a href="https://store.endpixel.gg/" target="_blank" rel="noreferrer">
						<button>Visit Store</button>
					</a>
				</div>
			</div>
		</>
	);
}
