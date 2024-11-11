import { Col, Container, Row } from "react-bootstrap"
import 'animate.css';
import proImg7 from "../../assets/img/project-img7.png"

export const PodcastProject = () => {
    return (
        <Container className="animate__animated animate__fadeIn project-details">
            <Row>
                <Col md={8} className="">
                    <h2>Podcast Hosting</h2>
                    <p>
                        I’ve hosted several commercial podcasts covering a variety of subjects, including technology and health.
                         These podcasts explored topics like tech innovations, digital health tools, and the future of healthcare. 
                         I interviewed experts and industry leaders, creating content that made complex topics accessible and interesting for a wide audience. 
                         My work involved researching, planning, and hosting each episode.<br/>

                        Throughout this role, I honed my skills in interviewing and storytelling. I focused on distilling complex information into clear narratives and guiding conversations in a way that engages the listener.<br/><br/>

                        An episode on mental health can be found <a href="https://open.spotify.com/episode/43whfbSTa2jOwH8XhPSG4n?si=b80dfb45c489484f" target="_blank">Here (Hebrew)</a>
                    </p>
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