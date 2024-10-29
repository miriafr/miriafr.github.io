import { Modal, Row, Col } from "react-bootstrap"
import projectImg from "../assets/img/project-img1.png"

export const ProjectModal = ({ showModal, handleClose, project }) => {
    return (
        <Modal show={showModal} onHide={handleClose} centered className="project-modal" size={'xl'}>
            <Modal.Header closeButton >
                <Modal.Title>
                <h2>{project?.title}</h2>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Row>
                <Col sm={12} md={4}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    </Col>
                    <Col sm={12} md={8}>
                        <img src={projectImg}></img>
                    </Col>
                </Row>
            </Modal.Body>
        </Modal>
    )
}