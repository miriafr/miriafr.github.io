import { Col, Container, Row } from "react-bootstrap"
import 'animate.css';
import proImg3 from "../../assets/img/project-img3.png"
import proGif1 from "../../assets/img/hci-proj-gif1.gif"
import img1 from "../../assets/img/hci-proj-img1.png"
import img2 from "../../assets/img/hci-proj-img2.png"

export const HciProject = () => {
    return (
        <Container className="animate__animated animate__fadeIn project-details">
            <Row>
                <Col md={8} className="">
                    <h2>Gesture-Based Crowd Simulation - HCI Final Project</h2><br />
                    <h5>
                        <b>Project Type: </b>Gesture Recognition, Digital Signal Processing, 3D Design, Arduino<br />
                        <b>Technologies Used: </b>Arduino, Rhino, Grasshopper<br />
                        <b>Time Frame: </b>Winter 2021<br />
                    </h5>
                    <br />
                    <p>
                        In this project, we designed a gesture based interaction system to explore our idea of “crowd control”,
                        Using a glove embedded with an Arduino and a movement sensor that interacts with a virtual “crowd” of thousands of individual dots on the screen.
                        Each gesture controlled the behavior of this digital crowd, creating an immersive interaction between the physical and virtual worlds.
                    </p>
                </Col>
                <Col md={4}>
                    <img className="project-img" src={proImg3} />
                </Col>
            </Row>
            <Row>
                <Col size={4} style={{ maxWidth: '400px' }}>
                    <img src={proGif1} className="project-img" ></img>
                </Col>
                <Col size={8}>
                    <h5><b>Process</b></h5>
                    <p>
                        This project was a collaborative effort, and we were all involved in every step, figuring out and learning at each stage. <br />
                        Although all three of us had a solid understanding of signal processing theory, applying it in new software environments presented a significant learning curve.<br/><br/>
                        Designing the glove, we wanted the design to resemble a glove, and incorporate some sphere element to correspond with the virtual agent, and decided to create a circular grid to render the glove with.<br/><br/>
                        Next, we needed to clearly define each movement to be able to correctly recognize each without mistakes.<br/><br/>
                        The last step was to develop a particle based system that has fluid movements, and create states to react to each gesture.
                    </p>
                </Col>
            </Row>
            <Row style={{ maxHeight: '300px' }}>
            <Col className="image-col">
                    <img className="project-img wide" src={img1} />
                    <figcaption>3D Printed Glove</figcaption>
                </Col>
                <Col className="image-col">
                    <img className="project-img wide" src={img2} />
                    <figcaption>Virtual Crowd</figcaption>
                </Col>
            </Row>
            <Row>
                <Col size={12}>
                <h5><b>Lessons</b></h5>
                    <ol>
                        <li>This project was a great way to expand my approach to coding by incorporating interactions beyond the traditional mouse and keyboard, helped me take into account new variables and requirements.</li>
                        <li>Learning new software tools pushed me to dig deeper into research to better understand what I was doing. </li>
                        <li>Being flexible in your plans is important, as we faced both 3D design issues and hardware limitations, and had to adjust our project accordingly.</li>
                    </ol>
                </Col>
            </Row>
        </Container>
    )
}