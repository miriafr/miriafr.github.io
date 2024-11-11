import { Col, Row, Container } from "react-bootstrap"
import navIcon1 from '../assets/img/nav-icon1.svg';
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
                            <a href="https://www.linkedin.com/in/miri-aframov/" target="_blank" title="LinkedIn"><img src={navIcon1} alt="" /></a>
                            <a href="mailto:miriaframov@gmail.com" title="Email"><img src={navIcon4} alt="" /></a>
                        </div>
                        <p>Copyright © 2024 All Rights Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}