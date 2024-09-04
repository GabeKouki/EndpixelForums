import "./WikiPrisons.css";
import React, { useState, useRef } from "react";
import { FaArrowAltCircleRight, FaFlag, FaCalendarAlt, FaFistRaised, FaHome, FaCog, FaServer } from "react-icons/fa";
import Footer from "../Footer";
import { User } from "@auth0/auth0-react";

export default function WikiPrisons() {
  const [isSidebarHidden, setIsSidebarHidden] = useState(false);

  const references = {
    mining: useRef(null)
  }
  // References for scrolling
  const miningRef = useRef(null);
  const pickaxesRef = useRef(null);
  const eventsRef = useRef(null);
  const kothRef = useRef(null);
  const outpostRef = useRef(null);
  const pvpRef = useRef(null);
  const cellsRef = useRef(null);
  const mechanicsRef = useRef(null);
  const serverRef = useRef(null);

  const toggleSidebar = () => {
    setIsSidebarHidden(!isSidebarHidden);
  };

  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="PrisonsWikiContainer">
        <div className={`SidebarContainer ${isSidebarHidden ? "hidden" : ""}`}>
          <div className="SidebarWords">
            <div className="SidebarCategory">
              <h3>Progression</h3>
              <div className="SidebarItem" onClick={() => scrollToSection(miningRef)}>
                <p>Mining</p>
              </div>
              <div className="SidebarItem" onClick={() => scrollToSection(pickaxesRef)}>
                <p>Pickaxes</p>
              </div>
            </div>

            <div className="SidebarCategory">
              <h3>Events</h3>
              <div className="SidebarItem" onClick={() => scrollToSection(kothRef)}>
                <p>Koth</p>
              </div>
              <div className="SidebarItem" onClick={() => scrollToSection(outpostRef)}>
                <p>Outpost</p>
              </div>
              <div className="SidebarItem" onClick={() => scrollToSection(eventsRef)}>
                <p>Pinata Party</p>
              </div>
              <div className="SidebarItem" onClick={() => scrollToSection(eventsRef)}>
                <p>Crown Event</p>
              </div>
              <div className="SidebarItem" onClick={() => scrollToSection(eventsRef)}>
                <p>Envoys</p>
              </div>
            </div>

            <div className="SidebarCategory">
              <h3>PvP</h3>
              <div className="SidebarItem" onClick={() => scrollToSection(pvpRef)}>
                <p>PvP</p>
              </div>
            </div>

            <div className="SidebarCategory">
              <h3>Cells</h3>
              <div className="SidebarItem" onClick={() => scrollToSection(cellsRef)}>
                <p>Cells</p>
              </div>
            </div>

            <div className="SidebarCategory">
              <h3>Mechanics</h3>
              <div className="SidebarItem" onClick={() => scrollToSection(mechanicsRef)}>
                <p>Mechanics</p>
              </div>
            </div>

            <div className="SidebarCategory">
              <h3>Server</h3>
              <div className="SidebarItem" onClick={() => scrollToSection(serverRef)}>
                <p>Server</p>
              </div>
            </div>
          </div>
          <div className="Arrow">
            <FaArrowAltCircleRight
              className={`SidebarArrow ${isSidebarHidden ? "spin" : ""}`}
              onClick={toggleSidebar}
            />
          </div>
        </div>

        {/* <div className="ContentContainer">
          <h1>Progression</h1>
          <div ref={references.mining}>
            <h2>Mining</h2>
            <p>Information about mining...</p>
          </div>
          <div ref={pickaxesRef}>
            <h2>Pickaxes</h2>
            <p>Information about pickaxes...</p>
          </div>

          <h1>Events</h1>
          <div ref={kothRef}>
            <h2>Koth</h2>
            <p>Information about Koth...</p>
          </div>
          <div ref={outpostRef}>
            <h2>Outpost</h2>
            <p>Information about Outpost...</p>
          </div>
          <div ref={eventsRef}>
            <h2>Pinata Party</h2>
            <p>Information about Pinata Party...</p>
          </div>
          <div ref={eventsRef}>
            <h2>Crown Event</h2>
            <p>Information about Crown Event...</p>
          </div>
          <div ref={eventsRef}>
            <h2>Envoys</h2>
            <p>Information about Envoys...</p>
          </div>

          <h1>PvP</h1>
          <div ref={pvpRef}>
            <h2>PvP</h2>
            <p>Custom armor, enchants, and more...</p>
          </div>

          <h1>Cells</h1>
          <div ref={cellsRef}>
            <h2>Cells</h2>
            <p>Raiding, Defending, and more...</p>
          </div>

          <h1>Mechanics</h1>
          <div ref={mechanicsRef}>
            <p>Details on game mechanics...</p>
          </div>

          <h1>Server</h1>
          <div ref={serverRef}>
            <p>Server-related information...</p>
          </div>
        </div> */}
      </div> 

      <Footer />
    </>
  );
}
