import { useState, useEffect } from "react"
import { Row, Col, Container } from "react-bootstrap"
import HeaderImg from '../assets/img/header-img.svg'
import 'animate.css';
import TrackVisibility from 'react-on-screen'

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    //todo: define this actually
    const toRotate = ["Web Developer", "Radio Anchor", "Pop Enthusiast"];
    const [text, setText] = useState('W');
    const [delta, setDelta] = useState(100 - Math.random() * 100);
    const wordPeriod = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)

        return () => { clearInterval(ticker) };
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)
        setText(updatedText);
        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2)
        }
        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(wordPeriod);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                        {({ isVisible }) =>
                            <div className={isVisible ? "animate__animated animate__fadeInUp" : "invisible"}>
                                <span className="tagline"> Miri's Portfolio</span>
                                <h1>{"Hi! I'm Miri, a "}<span className="wrap">{text}</span></h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                            </div>}
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={HeaderImg} alt="Header Img" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}