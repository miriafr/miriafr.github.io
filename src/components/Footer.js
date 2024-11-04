import { Col, Row, Container } from "react-bootstrap"
import logo from "../assets/img/logo.svg"
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import navIcon4 from '../assets/img/nav-icon4.svg';

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-item-center">
                    <Col size={12} sm={6} className="name">
                        <h1>Miri Aframov</h1>
                    </Col>
                    <Col size={12} sm={6} className="text-center text-sm-send">
                        <div className="social-icon">
                            <a href="#" title="LinkedIn"><img src={navIcon1} alt="" /></a>
                            <a href="#" title="GitHub"><img src={navIcon2} alt="" /></a>
                            <a href="#" title="Instagram"><img src={navIcon3} alt="" /></a>
                            <a href="#" title="Email"><img src={navIcon4} alt="" /></a>
                        </div>
                        <p>Copyright © 2024 All Rights Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}