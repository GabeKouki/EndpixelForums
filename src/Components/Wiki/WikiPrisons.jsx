import "./WikiPrisons.css";
import React, { useState } from "react";
import { FaArrowAltCircleRight, FaFlag, FaCalendarAlt, FaFistRaised, FaHome, FaCog, FaServer } from "react-icons/fa";
import Footer from "../Footer";

export default function WikiPrisons() {
  const [isSidebarHidden, setIsSidebarHidden] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarHidden(!isSidebarHidden);
  };

  return (
    <>
      <div className="PrisonsWikiContainer">
        <div className={`SidebarContainer ${isSidebarHidden ? "hidden" : ""}`}>
          <div className="SidebarWords">
            <div className="SidebarItem">
              <FaFlag className="SidebarIcon" />
              <h1>Progression</h1>
              <p>Player progression</p>
            </div>
            <div className="SidebarItem">
              <FaCalendarAlt className="SidebarIcon" />
              <h1>Events</h1>
            </div>
            <div className="SidebarItem">
              <FaFistRaised className="SidebarIcon" />
              <h1>PvP</h1>
            </div>
            <div className="SidebarItem">
              <FaHome className="SidebarIcon" />
              <h1>Cells</h1>
            </div>
            <div className="SidebarItem">
              <FaCog className="SidebarIcon" />
              <h1>Mechanics</h1>
            </div>
            <div className="SidebarItem">
              <FaServer className="SidebarIcon" />
              <h1>Server</h1>
            </div>
          </div>
          <div className="Arrow">
            <FaArrowAltCircleRight
              className={`SidebarArrow ${isSidebarHidden ? "spin" : ""}`}
              onClick={toggleSidebar}
            />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
