import { Col, Row, Container } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/meter1.svg"
import meter2 from "../assets/img/meter2.svg"
import meter3 from "../assets/img/meter3.svg"
import colorSharp from "../assets/img/color-sharp.png"
import aboutImg from "../assets/img/about-image.jpeg"
export const AboutMe = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
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

    return (
        <section className="about" id="skills">
            <Container>
                <Row className="align-items-center about-bx">
                        <Col sm={12} xs={12} md={6} xl={4}>
                            <img className="about-img" src={aboutImg}></img>
                        </Col>
                        <Col xs={12} sm={12} md={6} xl={8}>
                            <h2>
                                About Me
                            </h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                            {/* <Carousel responsive={responsive} infinite={true} className="about-slider">
                                <div className="item">
                                    <img src={meter1} alt="Image" />
                                    <h5>Web Development</h5>
                                </div>
                                <div className="item">
                                    <img src={meter2} alt="Image" />
                                    <h5>Design</h5>
                                </div>
                                <div className="item">
                                    <img src={meter3} alt="Image" />
                                    <h5>UX/UI</h5>
                                </div>
                                <div className="item">
                                    <img src={meter1} alt="Image" />
                                    <h5>Graphic Design</h5>
                                </div>
                            </Carousel> */}
                        </Col>
                </Row>
            </Container>
            {/* <img className="background-image-left" src={colorSharp}></img> */}
        </section>
    )
}