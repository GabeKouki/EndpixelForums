import './Navbar.css';
import React, { useEffect, useState } from "react";
import { Button } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import SmallLogo from '../Images/EPSmallLogo.png';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';  // Import hamburger icon
import LoginButton from './Auth/LoginButton';
import LogoutButton from './Auth/LogoutButton';



//TODO: Fix styling with media queries hamburger looks whack
//TODO: Fix styling with media queries hamburger looks whack
//TODO: Fix styling with media queries hamburger looks whack
//TODO: Fix styling with media queries hamburger looks whack
//TODO: Fix styling with media queries hamburger looks whack
//TODO: Fix styling with media queries hamburger looks whack
//TODO: Fix styling with media queries hamburger looks whack
//TODO: Fix styling with media queries hamburger looks whack
//TODO: Fix styling with media queries hamburger looks whack
//TODO: Fix styling with media queries hamburger looks whack
//TODO: Fix styling with media queries hamburger looks whack
//TODO: Fix styling with media queries hamburger looks whack
export default function Navbar() {
    const [isSticky, setIsSticky] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State to control the hamburger menu

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
        setIsMenuOpen(!isMenuOpen); // Toggle menu on hamburger click
    };

    return (
        <>
            <div className={`NavbarContainer ${isSticky ? 'sticky' : ''}`}>
                <Row className="NavRow">
                    <Col xs={4} sm={4}>
                        <Link to="/"><img alt='logo' className="SmallLogo" src={SmallLogo} /></Link>
                    </Col>
                    <Col xs={4} sm={4} className='NavTitle'>
                        <h2>Endpixel Forums</h2>
                    </Col>
                    <Col xs={4} sm={4} className="NavButtonCol">

                        <FaBars className="HamburgerIcon" onClick={toggleMenu} />
                        
                        <div className={`NavButtonContainer ${isMenuOpen ? 'open' : ''}`}>
                            <Button className='NavButton' onClick={() => navigate("/")}>Home</Button>
                            <Button className='NavButton' onClick={() => navigate("/rules")}>Rules</Button>
                            <Button className='NavButton' onClick={() => navigate("/wiki")}>Wiki</Button>
                            <Button className='NavButton' onClick={() => navigate("/forums")}>Forums</Button>
                            <LoginButton />
                            <LogoutButton />
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    );
}
