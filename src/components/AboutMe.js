import { Col, Row, Container } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import aboutImg from "../assets/img/about-image.jpeg"
export const AboutMe = () => {
    return (
        <section className="about" id="skills">
            <Container>
                <Row className="align-items-center about-bx">
                        <Col sm={12} xs={12} md={6} xl={4}>
                            <img className="about-img" src={aboutImg}></img>
                        </Col>
                        <Col xs={12} sm={12} md={6} xl={8}>
                            <h2>
                                About Me
                            </h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                        </Col>
                </Row>
            </Container>
        </section>
    )
}