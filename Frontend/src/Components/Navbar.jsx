import "./Navbar.css";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import SmallLogo from "../Images/EPSmallLogo.png";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  FaBars,
  FaHome,
  FaGavel,
  FaBook,
  FaForumbee,
  FaTimes,
} from "react-icons/fa";
import LoginButton from "./Auth/LoginButton";
import LogoutButton from "./Auth/LogoutButton";

export default function Navbar() {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {isSticky && <div className="NavbarSpacer" />}
      <div className={`NavbarContainer ${isSticky ? "sticky" : ""}`}>
        <Row className="NavRow">
          <Col xs={4} sm={4}>
            <Link to="/">
              <img alt="logo" className="SmallLogo" src={SmallLogo} />
            </Link>
          </Col>
          <Col xs={4} sm={4} className="NavTitle">
            <h2>Endpixel Forums</h2>
          </Col>
          <Col xs={4} sm={4} className="NavButtonCol">
            <div className="HamburgerContainer">
              {isMenuOpen ? (
                <FaTimes
                  className="HamburgerIcon CloseIcon"
                  onClick={toggleMenu}
                />
              ) : (
                <FaBars className="HamburgerIcon" onClick={toggleMenu} />
              )}
            </div>
            <div className="NavButtonContainer">
              <Button className="NavButton" onClick={() => navigate("/")}>
                Home
              </Button>
              <Button className="NavButton" onClick={() => navigate("/rules")}>
                Rules
              </Button>
              <Button className="NavButton" onClick={() => navigate("/wiki")}>
                Wiki
              </Button>
              <Button className="NavButton" onClick={() => navigate("/forums")}>
                Forums
              </Button>
              <LoginButton />
              <LogoutButton />
            </div>
          </Col>
        </Row>
      </div>
      <div className={`Sidebar ${isMenuOpen ? "open" : ""}`}>
        <div className="X">
          <FaTimes onClick={toggleMenu} />
        </div>
        <div>
          <div className="SidebarItem" onClick={() => navigate("/")}>
            <FaHome className="SidebarIcon" /> <span>Home</span>
          </div>
          <div className="SidebarItem" onClick={() => navigate("/rules")}>
            <FaGavel className="SidebarIcon" /> <span>Rules</span>
          </div>
          <div className="SidebarItem" onClick={() => navigate("/wiki")}>
            <FaBook className="SidebarIcon" /> <span>Wiki</span>
          </div>
          <div className="SidebarItem" onClick={() => navigate("/forums")}>
            <FaForumbee className="SidebarIcon" /> <span>Forums</span>
          </div>
        </div>
        <LoginButton />
        <LogoutButton />
      </div>

      {isMenuOpen && <div className="Overlay" onClick={toggleMenu}>
        
        </div>}
    </>
  );
}
