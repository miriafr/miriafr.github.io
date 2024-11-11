import { Col, Container, Row } from "react-bootstrap"
import 'animate.css';
import proImg4 from "../../assets/img/project-img4.png"
import img1 from "../../assets/img/play-proj-img1.jpg"

export const PlayAlongProject = () => {
    return (
        <Container className="animate__animated animate__fadeIn project-details">
            <Row>
                <Col md={8} className="">
                    <h2>Play Along - Collaborative Playlist App</h2>
                    <h5>
                        <b>Project Type:</b> Mobile app, UX design<br />
                        <b>Technologies Used:</b> Android app development<br />
                        <b>Time Frame:</b> Spring 2020<br /><br />
                    </h5>
                    <p>
                        This project was developed as part of a mobile development and user-centered design course.<br />
                        Play Along is a mobile app designed for a collaborative music listening experience by allowing users to create, edit, and share playlists across multiple platforms.<br />
                        In the app, users can create playlists with songs from both Spotify and YouTube, invite friends to join, and chat with other users connected to the playlist. <br /><br />
                        I was in charge of the app screens design and development.
                    </p>
                </Col>
                <Col md={4}>
                    <img className="project-img" src={proImg4} />
                </Col>
            </Row>
            <Row>
                <Col size={12}>
                    <h5><b>Process</b></h5>
                    <p>
                        We began the project by brainstorming with my teammate to conceptualize the app. Starting with basic wireframes and flows, we gathered early feedback from potential users.<br /><br/>
                        Then, we researched the technical feasibility of the project, including integrating the Spotify and YouTube Android SDKs.<br/><br/>
                        With the core music playback functionality established, we moved to the collaborative aspects of the app. 
                        Using Firebase services, we implemented real-time playlist synchronization, independent song controls, and the dedicated chat feature.<br/><br/>
                        Continuous testing and debugging were crucial throughout the development phase to ensure a stable and responsive app. <br/><br/>
                        Interestingly, a few months after our app was complete, Spotify released a collaborative playlist feature, validating the market need we identified before.<br/>

                    </p>
                </Col>
            </Row>
            <Row>
            <Col className="image-col" size={12}>
                    <img className="project-img wide" src={img1} />
                    <figcaption>Home Screen Design Iteration</figcaption>
                </Col>
            </Row>
            <Row>
                <Col size={12}>
                    <h5><b>Lessons</b></h5>
                    <p>
                        <ol>
                            <li>Developed skills in building real-time, collaborative features that sync across different devices.</li>
                            <li>I Improved my understanding of user-centric design principles, and learned to incorporate contant feedback as part of the work process itself.</li>
                        </ol>
                    </p>
                </Col>
            </Row>
        </Container>
    )
}