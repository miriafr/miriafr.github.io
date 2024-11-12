import { Col } from "react-bootstrap"

export const ProjectCard = ({title, description, imgUrl}) => {
    return (
        <Col sm={10} md={12}>
            <div className="proj-imgbx">
                <img src={imgUrl} />
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span>
                </div>
            </div>
        </Col>
    )
}