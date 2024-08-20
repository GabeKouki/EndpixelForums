import React from "react";
import './WikiHomepage.css';
import Footer from "../Footer";
import { Row, Col } from "react-bootstrap";

export default function WikiHomepage() {
    return (
        <>
            <div className="WikiContainer">
                <div className="BoxContainer">
                    <Row>
                        <Col lg={4} md={6} sm={12} className="WikiBoxes">Hey
                        walkthroughs
                        ww
                        </Col>
                        <Col lg={4} md={6} sm={12} className="WikiBoxes">Hey</Col>
                        <Col lg={4} md={6} sm={12} className="WikiBoxes">Hey</Col>
                    </Row>
                    <Row>
                        <Col lg={4} md={6} sm={12} className="WikiBoxes">Hey</Col>
                        <Col lg={4} md={6} sm={12} className="WikiBoxes">Hey</Col>
                        <Col lg={4} md={6} sm={12} className="WikiBoxes">Hey</Col>
                    </Row>
                </div>
            </div>
            <Footer />
        </>
    );
}
