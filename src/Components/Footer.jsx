import "./Footer.css";

import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import FooterLogo from "../Images/EPSmallLogo.png";
import React from "react";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <div className="FooterContainer">
        <Container className="SecondFooterContainer">
          <Row>
            <Col md={1} className="FooterLogoContainer">
              <Link to="/"><img src={FooterLogo} alt="logo" /></Link>
            </Col>
            <Col>
              <h2 className="BoldFooterText">Endpixel</h2>
              <Link className="FooterSmallText" to="/FAQ"><p>Questions</p></Link>
              <p className="FooterSmallText">Help</p>
              <p className="FooterSmallText">Chat</p>
            </Col>
            <Col>
              <a href="https://store.endpixel.gg/" target="_blank"><h2 className="BoldFooterText">Products</h2></a>
              <p className="FooterSmallText">Teams</p>
              <p className="FooterSmallText">Advertising</p>
              <p className="FooterSmallText">Talent</p>
            </Col>
            <Col> 
            <h2 className="BoldFooterText">Company</h2>
            <Link className="FooterSmallText" to="/about"><p>About</p></Link>
            <p className="FooterSmallText">Work Here</p>
            <p className="FooterSmallText">Privacy Policy</p>
            <p className="FooterSmallText">Terms of Service</p>
            <p className="FooterSmallText">Contact Us</p>
            <p className="FooterSmallText">Cookie Settings</p>
            <p className="FooterSmallText">Cookie Policy</p>
            </Col>
            <Col className="SocialLinks">
                <div className="FooterSocials"><a href="https://x.com/endpixelmc?s=21" target="_blank">Twitter</a></div> 
                <div className="FooterSocials"><a href="https://discord.gg/endpixel" target="_blank">Discord</a></div> 
                <div className="FooterSocials"><a href="https://www.youtube.com/@EndPixelPrisons" target="_blank">Youtube</a></div>      
                <div className="FooterSocials"><a href="https://www.tiktok.com/@endpixelprisons" target="_blank">TikTok</a></div>
                <div className="FooterSocials"><a href="https://www.instagram.com/endpixelnetwork?igsh=NGVhN2U2NjQ0Yg==" target="_blank">Instagram</a></div>          
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
