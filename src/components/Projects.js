import { Container, Row, Nav, Tab, Col } from "react-bootstrap";
import { useState, useEffect } from 'react';
import { ProjectCard } from "./ProjectCard";
import proImg1 from "../assets/img/project-img1.png"
import proImg2 from "../assets/img/project-img2.png"
import proImg3 from "../assets/img/project-img3.png"
import proImg4 from '../assets/img/project-img4.png'
import proImg5 from '../assets/img/project-img5.png'
import proImg6 from '../assets/img/project-img6.png'
import proImg7 from '../assets/img/project-img7.png'
import proImg8 from '../assets/img/project-img8.jpeg'

import 'animate.css';
import Carousel from "react-multi-carousel";
import { Collapse } from "react-bootstrap";
import { HackathonProject } from "./Projects/HackathonProject";
import { FinalProjet } from "./Projects/FinalProject";
import { HciProject } from "./Projects/HciProject";
import { PlayAlongProject } from "./Projects/PlayAlongProject";
import { PortfolioProject } from "./Projects/PortfolioProject";
import { RadioProject } from "./Projects/RadioProject";
import { PodcastProject } from "./Projects/PodcastProject";
import { AiProject } from "./Projects/AiProject";

export const Projects = () => {
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
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    const [selectedProject, setSelectedProject] = useState(null);
    const [isExpanded, setIsExpanded] = useState(false);

    const handleCardClick = (project) => {
        if (!isExpanded) {
            setSelectedProject(project);
            setIsExpanded(true);
        } else {
            if (project.title === selectedProject.title) {
                setIsExpanded(false);
                setTimeout(() => setSelectedProject(null), 300);
            } else{
                setSelectedProject(project);
            }
        }
    };
    const handleClose = () => {
        setIsExpanded(false);
        setTimeout(() => setSelectedProject(null), 300);
    }
    const projects = [
        {
            title: "Capstone Project",
            description: "Mobile app with deep-learning computer vision",
            imgUrl: proImg1,
            detailsComponent: FinalProjet
        },
        {
            title: "HUJI Hackathon 2021",
            description: "Front-end web and mobile app development",
            imgUrl: proImg2,
            detailsComponent: HackathonProject
        },
        {
            title: "HCI Intro Project",
            description: "3D Design & Movement Recognition",
            imgUrl: proImg3,
            projUrl: "final-project",
            detailsComponent: HciProject
        },
        {
            title: "Play Along",
            description: "Mobile App",
            imgUrl: proImg4,
            projUrl: "final-project",
            detailsComponent: PlayAlongProject
        },
        {
            title: "Personal Portfolio",
            description: "React Webapp",
            imgUrl: proImg5,
            projUrl: "final-project",
            detailsComponent: PortfolioProject
        },
    ];
    const miscProjects = [
        {
            title: "GLZ + GLGLZ",
            description: "Radio host",
            imgUrl: proImg6,
            detailsComponent: RadioProject
        },
        {
            title: "Commercial Podcasts",
            description: "",
            imgUrl: proImg7,
            detailsComponent: PodcastProject
        },
        {
            title: "AI Project",
            description: "AI Reinforcment Learning and Pixel Design",
            imgUrl: proImg8,
            detailsComponent: AiProject
        },

    ];

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col size={12}>
                        <h2>Projects</h2>
                        <p className="projects-p">Below are some highlights from my work combining code, creativity, and practical problem-solving </p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first" onSelect={(tab) => setActiveTab(tab)}>
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Coding</Nav.Link>
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
                                                        <div key={index} className="item" onClick={() => handleCardClick(project)}>
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
                                                        <div key={index} className="item" onClick={() => handleCardClick(project)}>
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
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Collapse in={isExpanded}>
                            <div className="project-details-container">
                                {selectedProject && (
                                    <div className="project-details-content">
                                        <selectedProject.detailsComponent />
                                        <button className="btn btn-secondary" onClick={handleClose}>
                                            Close
                                        </button>
                                    </div>
                                )}
                            </div>
                        </Collapse>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}