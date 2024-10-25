import { Container, Row, Nav, Tab, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png"
import proImg1 from "../assets/img/project-img1.png"
import proImg2 from "../assets/img/project-img2.png"
import proImg3 from "../assets/img/project-img3.png"

export const Projects = () => {
    const projects = [
        {
            title: "Final Project",
            description: "Mobile App with neural network",
            imgUrl: proImg1,
        },
        {
            title: "Radio Hosting",
            description: "Hosted Radio and stuff",
            imgUrl: proImg2,
        },
        {
            title: "UX Projects",
            description: "Did all sorts of stuff like that",
            imgUrl: proImg3,
        },
        {
            title: "Project 4",
            description: "more stuff I don't think about",
            imgUrl: proImg1,
        },
        {
            title: "Project 5",
            description: "I'm a fraud",
            imgUrl: proImg2,
        },
        {
            title: "Project 6",
            description: "LOL you think you have enough stuff",
            imgUrl: proImg3,
        },
    ];

    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col size={12}>
                        <h2>Projects</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Tab 1</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Tab 2</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Tab 3</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            projects.map((project, index) => {
                                                return (
                                                    <ProjectCard
                                                        key={index}
                                                        {...project}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">Cool</Tab.Pane>                            <Tab.Pane eventKey="second"></Tab.Pane>
                                <Tab.Pane eventKey="third">Cool Cool</Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} />
        </section>
    )
}