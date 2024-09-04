import React, { useState } from "react";
import "./RulesHomepage.css";
import { Row, Col } from "react-bootstrap";
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
    <>
      <div className="RulesContainer">
        <Row>
          <Col className="RulesSideMenu" xs={12} sm={4} md={3} lg={3}>
            <h1 className="SidebarMenuName">Rules</h1>
            <div>
              <Row className="IconRow">
                <Col xs={2} className="IconContainer">
                  <FontAwesomeIcon
                    className={isActive === "Home" ? "IconActive" : ""}
                    size="2xl"
                    icon={faHouse}
                  />
                </Col>
                <Col xs={10}>
                  <h1
                    className={`SidebarNavigationTabs ${
                      isActive === "Home" ? "Active" : ""
                    }`}
                    onClick={() => updateTab("Home")}
                  >
                    Home
                  </h1>
                </Col>
              </Row>

              <Row className="IconRow">
                <Col xs={2} className="IconContainer">
                  <FontAwesomeIcon
                    className={isActive === "Chat" ? "IconActive" : ""}
                    size="2xl"
                    icon={faComment}
                  />
                </Col>
                <Col xs={10}>
                  <h1
                    className={`SidebarNavigationTabs ${
                      isActive === "Chat" ? "Active" : ""
                    }`}
                    onClick={() => updateTab("Chat")}
                  >
                    Chat
                  </h1>
                </Col>
              </Row>

              <Row className="IconRow">
                <Col xs={2} className="IconContainer">
                  <FontAwesomeIcon
                    className={isActive === "Gameplay" ? "IconActive" : ""}
                    size="2xl"
                    icon={faGamepad}
                  />
                </Col>
                <Col xs={10}>
                  <h1
                    className={`SidebarNavigationTabs ${
                      isActive === "Gameplay" ? "Active" : ""
                    }`}
                    onClick={() => updateTab("Gameplay")}
                  >
                    Gameplay
                  </h1>
                </Col>
              </Row>

              <Row className="IconRow">
                <Col xs={2} className="IconContainer">
                  <FontAwesomeIcon
                    className={isActive === "Prisons" ? "IconActive" : ""}
                    size="2xl"
                    icon={faShield}
                  />
                </Col>
                <Col xs={10}>
                  <h1
                    className={`SidebarNavigationTabs ${
                      isActive === "Prisons" ? "Active" : ""
                    }`}
                    onClick={() => updateTab("Prisons")}
                  >
                    Prisons
                  </h1>
                </Col>
              </Row>

              <Row className="IconRow">
                <Col xs={2} className="IconContainer">
                  <FontAwesomeIcon
                    className={isActive === "Factions" ? "IconActive" : ""}
                    size="2xl"
                    icon={faFortAwesome}
                  />
                </Col>
                <Col xs={10}>
                  <h1
                    className={`SidebarNavigationTabs ${
                      isActive === "Factions" ? "Active" : ""
                    }`}
                    onClick={() => updateTab("Factions")}
                  >
                    Factions
                  </h1>
                </Col>
              </Row>
            </div>
          </Col>
          
          {/* Content column that adjusts based on screen size */}
          <Col className="RulesHolder" xs={12} sm={8} md={9} lg={9}>
            {isActive === "Home" && <HomeRules />}
            {isActive === "Chat" && <ChatRules />}
            {isActive === "Gameplay" && <GameplayRules />}
          </Col>
        </Row>
      </div>
    </>
  );
}
