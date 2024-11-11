import { Col, Row, Container } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import aboutImg from "../assets/img/about-image.jpeg"
import LeoTooltip from "./Tooltip";
export const AboutMe = () => {
    return (
        <section className="about" id="about">
            <Container>
                <Row className="align-items-center about-bx">
                    <Col sm={12} xs={12} md={6} xl={4}>
                        <img className="about-img" src={aboutImg}></img>
                    </Col>
                    <Col xs={12} sm={12} md={6} xl={8}>
                        <h2>
                            About Me
                        </h2>
                        <p>
                            I’m Miri (pronounced like Siri with an ‘M’), a full-stack web developer and a creative engineer. <br/><br/>
                            I have a Computer Engineering B.Sc. from the Hebrew University of Jerusalem, 
                            and for the last 4 years I worked as a software developer at Brightsource Energy, 
                            developing tools for the setup and maintenance of solar and green energy power stations. 
                            Working directly with our users, I saw the positive effect technology can have, and the potential that developers can have to create solutions that improve the world.<br/><br/>

                            Having worked both in radio and tech, I’m interested in the intersection of design, development, and media, and its impact on society. 
                            A life-long learner I’m always seeking to expand my skills, broaden my perspective and challenging myself. I strive to create technology that makes our life better, but I’m not just focused on creating something good -I want to it to be fun too.<br/><br/>

                            When I’m not coding, I’m passionate about music, design, and my dog, Leo.
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}