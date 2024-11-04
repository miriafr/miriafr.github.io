import { Container, Row, Nav, Tab, Col } from "react-bootstrap";
import { useState, useEffect } from 'react';
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";
import proImg1 from "../assets/img/project-img1.png"
import proImg2 from "../assets/img/project-img2.png"
import proImg3 from "../assets/img/project-img3.png"
import proImg4 from '../assets/img/project-img4.png'
import proImg5 from '../assets/img/project-img5.png'
import proImg6 from '../assets/img/project-img6.png'
import proImg7 from '../assets/img/project-img7.png'
import 'animate.css';
import Carousel from "react-multi-carousel";

export const Projects = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const [activeTab, setActiveTab] = useState('first');
    useEffect(() => { }, [activeTab]);

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 3
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    const handleShowModal = (item) => {
        setSelectedItem(item);
        setShowModal(true);
    };
    const handleCloseModal = () => setShowModal(false);

    const projects = [
        {
            title: "Capstone Project",
            description: "Mobile App with AI photo recognition",
            imgUrl: proImg1,
            projUrl: "final-project"
        },
        {
            title: "HUJI Hackathon 2021",
            description: "Mobile App, FrontEnd, UX/UI basic design",
            imgUrl: proImg2,
            projUrl: "final-project"
        },
        {
            title: "HCI Intro Project",
            description: "3D Design & Movement Recognition",
            imgUrl: proImg3,
            projUrl: "final-project"
        },
        {
            title: "Play Along",
            description: "Mobile App",
            imgUrl: proImg4,
            projUrl: "final-project"
        },
        {
            title: "Personal Portfolio",
            description: "React Webapp",
            imgUrl: proImg5,
            projUrl: "final-project"
        },
    ];
    const miscProjects = [
        {
            title: "GLZ + GLGLZ",
            description: "radio host",
            imgUrl: proImg6,
        },
        {
            title: "Commercial Podcasts",
            description: "",
            imgUrl: proImg7,
        },

    ];

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col size={12}>
                        <h2>Projects</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first" onSelect={(tab) => setActiveTab(tab)}>
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Coding Projects</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Miscellaneous</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row className="animate__animated animate__fadeIn carousel-container">
                                        {activeTab === 'first' && (
                                            <Carousel id="first" responsive={responsive} centerMode={true} focusOnSelect={false} infinite={true} className="projects-slider">
                                                {projects.map((project, index) => {
                                                    return (
                                                        <div key={index} className="item" onClick={() => handleShowModal(project)}>
                                                            <ProjectCard
                                                                key={index}
                                                                {...project}
                                                            />
                                                        </div>
                                                    )
                                                })}
                                            </Carousel>)}
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <Row className="animate__animated animate__fadeIn carousel-container">
                                        {activeTab === 'second' && (
                                            <Carousel id="second" responsive={responsive} centerMode={true} infinite={true} focusOnSelect={false} className="projects-slider">
                                                {miscProjects.map((project, index) => {
                                                    return (
                                                        <div key={index} className="item">
                                                            <ProjectCard
                                                                key={index}
                                                                {...project}
                                                            />
                                                        </div>
                                                    )
                                                })}
                                            </Carousel>)}
                                    </Row></Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
                <ProjectModal showModal={showModal} handleClose={handleCloseModal} project={selectedItem} />
            </Container>
        </section>
    )
}