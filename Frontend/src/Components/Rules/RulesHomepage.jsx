import React, { useState } from "react";
import "./RulesHomepage.css";
import HomeRules from "./HomeRules";
import ChatRules from "./ChatRules";
import GameplayRules from "./GameplayRules";
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import { faFortAwesome } from "@fortawesome/free-brands-svg-icons";
import { faShield } from '@fortawesome/free-solid-svg-icons';
import { faGamepad } from "@fortawesome/free-solid-svg-icons";

export default function RulesHomepage() {
  const [isActive, setIsActive] = useState("Home");

  const updateTab = (placeholder) => {
    setIsActive(placeholder);
  };

  return (
    <div className="RulesContainer">
      <div className="RulesSideMenu">
        <h1 className="SidebarMenuName">Rules</h1>
        <div>
          <div className="IconRow" onClick={() => updateTab("Home")}>
            <div className="IconContainer">
              <FontAwesomeIcon
                className={isActive === "Home" ? "IconActive" : ""}
                size="2xl"
                icon={faHouse}
              />
            </div>
            <h1 className={`SidebarNavigationTabs ${isActive === "Home" ? "Active" : ""}`}>
              Home
            </h1>
          </div>

          <div className="IconRow" onClick={() => updateTab("Chat")}>
            <div className="IconContainer">
              <FontAwesomeIcon
                className={isActive === "Chat" ? "IconActive" : ""}
                size="2xl"
                icon={faComment}
              />
            </div>
            <h1 className={`SidebarNavigationTabs ${isActive === "Chat" ? "Active" : ""}`}>
              Chat
            </h1>
          </div>

          <div className="IconRow" onClick={() => updateTab("Gameplay")}>
            <div className="IconContainer">
              <FontAwesomeIcon
                className={isActive === "Gameplay" ? "IconActive" : ""}
                size="2xl"
                icon={faGamepad}
              />
            </div>
            <h1 className={`SidebarNavigationTabs ${isActive === "Gameplay" ? "Active" : ""}`}>
              Gameplay
            </h1>
          </div>

          <div className="IconRow" onClick={() => updateTab("Prisons")}>
            <div className="IconContainer">
              <FontAwesomeIcon
                className={isActive === "Prisons" ? "IconActive" : ""}
                size="2xl"
                icon={faShield}
              />
            </div>
            <h1 className={`SidebarNavigationTabs ${isActive === "Prisons" ? "Active" : ""}`}>
              Prisons
            </h1>
          </div>

          <div className="IconRow" onClick={() => updateTab("Factions")}>
            <div className="IconContainer">
              <FontAwesomeIcon
                className={isActive === "Factions" ? "IconActive" : ""}
                size="2xl"
                icon={faFortAwesome}
              />
            </div>
            <h1 className={`SidebarNavigationTabs ${isActive === "Factions" ? "Active" : ""}`}>
              Factions
            </h1>
          </div>
        </div>
      </div>

      <div className="RulesHolder">
        {isActive === "Home" && <HomeRules />}
        {isActive === "Chat" && <ChatRules />}
        {isActive === "Gameplay" && <GameplayRules />}
      </div>
    </div>
  );
}
