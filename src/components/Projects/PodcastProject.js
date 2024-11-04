import { Col, Container, Row } from "react-bootstrap"
import 'animate.css';
import proImg7 from "../../assets/img/project-img7.png"

export const PodcastProject = () => {
    return (
        <Container className="animate__animated animate__fadeIn project-details">
            <Row>
                <Col md={8} className="">
                    <h2>Title</h2>
                </Col>
                <Col md={4}>
                    <img className="project-img" src={proImg7} />
                </Col>
            </Row>
            <Row>
                <Col size={12}>
                    <h5>Process</h5>
                    <p>
                    </p>
                </Col>
            </Row>
        </Container>
    )
}