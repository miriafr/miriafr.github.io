import { Modal, Row, Col } from "react-bootstrap"
import projectImg from "../assets/img/project-img1.png"
import { Link } from "react-router-dom";

export const ProjectModal = ({ showModal, handleClose, project }) => {

    return (
        <Modal show={showModal} onHide={handleClose} centered className="project-modal" size={'xl'}>
            <Modal.Body>
                <Row>
                    <Col sm={12} md={4}>
                    <h2>{project?.title}</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                        <Link to={project?.projUrl} target="_blank">See More</Link>
                    </Col>
                    <Col sm={12} md={8}>
                        <img src={projectImg}></img>
                    </Col>
                </Row>
            </Modal.Body>
        </Modal>
    )
}