import { Col, Container, Row } from "react-bootstrap"
import 'animate.css';
import gif1 from "../../assets/img/ai-proj-gif1.gif"

export const AiProject = () => {
    return (
        <Container className="animate__animated animate__fadeIn project-details">
            <Row>
                <Col md={8} className="">
                    <h2>Pixel Character Design</h2>
                    <p>
                    As part of an introduction to AI course, our final submission was an AI trained to beat the game Flappy Bird using reinforcement learning. <br/><br/>
                    I wanted to add some personality to our submission, so I thought, why not have my professor take on the challenge of flying through pipes? I designed the character, its movements and game logo pixel-by-pixel, matching the retro, 8-bit game aesthetic while also paying homage to our professor, Jeff Rosenschein. It was a fun way to combine my interests in art and technology. 
                    </p>
                </Col>
                <Col md={4}>
                    <img className="project-img" src={gif1} />
                </Col>
            </Row>
        </Container>
    )
}