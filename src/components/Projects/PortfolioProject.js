import { Col, Container, Row } from "react-bootstrap"
import 'animate.css';
import proImg5 from "../../assets/img/project-img5.png"

export const PortfolioProject = () => {
    return (
        <Container className="animate__animated animate__fadeIn project-details">
            <Row>
                <Col md={8} className="">
                    <h2>Personal Portfolio Website</h2>
                    <p>
                        I designed and developed my personal portfolio website from scratch, using it as a hands-on project to learn and work with React.<br />
                        Drawing inspiration from various professional portfolios—from developers to designers—I focused on creating a clean, responsive design with subtle transitions and animations to give personality and warmth to the site. 
                    </p>
                </Col>
                <Col md={4}>
                    <img className="project-img" src={proImg5} />
                </Col>
            </Row>
        </Container>
    )
}