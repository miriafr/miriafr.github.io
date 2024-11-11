import { Col, Container, Row } from "react-bootstrap"
import 'animate.css';
import proImg6 from "../../assets/img/project-img6.png"

export const RadioProject = () => {
    return (
        <Container className="animate__animated animate__fadeIn project-details">
            <Row>
                <Col md={8} className="">
                    <h2>GLZ & Glglz Radio</h2>
                    <p>
                        GLZ and Glglz are Israel’s military-operated radio stations, which, despite the initial idea this term might invoke, serve as a national public radio network for Israel. These stations provide a wide range of programming, including news, culture, and music. For many Israelis, army radio is a trusted news source and a key part of daily life, reaching a broad audience with both journalistic integrity and creative content, 
                        launching the careers of prominent Israeli journalists and media professionals.<br/><br/>
                        These military-operated radio networks hold a unique position in Israeli society, acting as vital national institutions that are deeply embedded in the country's culture and values.<br/><br/>
                        I was selected to the highly competitive and selective military service, 
                        where I developed skills in broadcasting, production, and storytelling. 
                        This experience equipped me with a deep understanding of media and culture production and the impact of responsible and ethical journalism.<br/><br/>
                        During my 10 years there, I anchored news broadcasts, hosted daily music shows, produced talk radio programs, interviewed leading figures, 
                        and occasionally hosted Israel’s weekly music chart countdown, reaching a nation-wide audience in a high-profile, nationally recognized environment.<br/><br/>
                        You can listen to a weekly chart <a href="https://glz.co.il/pageId=140126" target="_blank">Here,</a> but note that it is, naturally, in Hebrew
                    </p>
                </Col>
                <Col md={4}>
                    <img className="project-img" src={proImg6} />
                </Col>
            </Row>
        </Container>
    )
}