import { Col, Container, Row } from "react-bootstrap"
import 'animate.css';
import proImg4 from "../../assets/img/project-img4.png"

export const PlayAlongProject = () => {
    return (
        <Container className="animate__animated animate__fadeIn project-details">
            <Row>
                <Col md={8} className="">
                    <h2>Title</h2>
                    <h5>
                        <b>Project Type: </b>
                        <b>Technologies Used: </b>
                        <b>Time Frame: </b>
                    </h5>
                    <p>

                    </p>
                </Col>
                <Col md={4}>
                    <img className="project-img" src={proImg4} />
                </Col>
            </Row>
            <Row>
                <Col size={12}>
                    <h5><b>Process</b></h5>
                    <p>
                    </p>
                </Col>
            </Row>
            <Row>
                <Col size={12}>
                    <h5><b>Lessons</b></h5>
                    <p>
                        <ol>
                            <li></li>
                            <li></li>
                        </ol>
                    </p>
                </Col>
            </Row>
        </Container>
    )
}