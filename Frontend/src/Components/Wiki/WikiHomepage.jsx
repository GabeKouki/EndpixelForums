import React from "react";
import "./WikiHomepage.css";
import Footer from "../Footer";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";

export default function WikiHomepage() {

  return (
    <>
          <div className="HomeContainer">
            <div className="LeftContentBox">
              <h1>Prisons</h1>
              <p>
                Explore the vast world of our Prisons server. From mining to
                PvP, there's always something new to discover!
              </p>
                <Link to="/wiki/prisons" className="text-link">
                  Go to Prisons Wiki <FontAwesomeIcon icon={faAnglesRight} />
                </Link>
            </div>
            <div className="RightContentBox">
              <h1>Factions</h1>
              <p>
                Build, raid, and conquer in our Factions server. Forge alliances
                or wage wars as you rise to dominance.
              </p>
                <Link to="/wiki/factions" className="text-link">
                  Go to Factions Wiki <FontAwesomeIcon icon={faAnglesRight} />
                </Link>
            </div>
          </div>















      <Footer />
    </>
  );
}
