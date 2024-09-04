import React, { useEffect } from "react";
import Footer from "../Footer";
import { useState } from "react";
import "./About.css";

export default function About() {

    const [timePassed, setTimePassed] = useState("");

    useEffect(() => {
        const startDate = new Date("February 5, 2024 00:00:00");
        
        const updateTimer = () => {
            const now = new Date();
            const difference = now - startDate;

            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
            const minutes = Math.floor((difference / 1000 / 60) % 60);
            const seconds = Math.floor((difference / 1000) % 60);

            setTimePassed(`${days} day${days !== 1 ? "s" : ""}, ${hours} hour${hours !== 1 ? "s" : ""}, ${minutes} minute${minutes !== 1 ? "s" : ""}, and ${seconds} second${seconds !== 1 ? "s" : ""}`);
        };

        const intervalId = setInterval(updateTimer);

        return () => clearInterval(intervalId);
    }, []);


  return (
    <>
      <div className="AboutPageContainer">
        <h1>Minecraft with a touch of</h1>
        <h2 className="Creativity">Creativity</h2>
        <p>Creating well-rounded gameplay through experiences and commuinity outreach</p>
        <div className="AboutInfoContainer">
          <div className="AboutInfo">
            <h2>{timePassed}</h2>
            <p>Since Endpixel was born</p>
          </div>
        </div>
        <div className="AboutButtonContainer">
        <a href="https://store.endpixel.gg/" target="_blank" rel="noreferrer"><button>Products</button></a>
        </div>
      </div>
      <Footer />
    </>
  );
}
