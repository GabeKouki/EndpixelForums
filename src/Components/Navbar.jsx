import './Navbar.css'

import React, { useEffect, useState } from "react";

import { Button } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import SmallLogo from '../Images/EPSmallLogo.png';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

export default function Navbar() {
    const [isSticky, setIsSticky] = useState(false)

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
            window.removeEventListener("scroll", handleScroll)
        };
    }, []);


    const navigate = useNavigate();

    return(
        <>
        <div className={`NavbarContainer ${isSticky ? 'sticky' : ''}`}>
            <Row>
                <Col md={3}>
                    <Link to="/"><img alt='logo' className="SmallLogo" src={SmallLogo} /></Link>
                </Col>
                <Col md={6} className='NavTitle'>
                    <h2>Endpixel Forums</h2>
                </Col>
                <Col md={3}>
                <div className="NavButtonContainer">
                    <Button className='NavButton' onClick={() => navigate("/")}>Home</Button>
                    <Button className='NavButton' onClick={() => navigate("/rules")}>Rules</Button>
                    <Button className='NavButton' onClick={() => navigate("/wiki")}>Wiki</Button>
                    <Button className='NavButton' onClick={() => navigate("/forums")}>Forms</Button>
                </div>
                </Col>
            </Row>
        </div>
        </>
    )
}