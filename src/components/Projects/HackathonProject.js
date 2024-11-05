import { Col, Container, Row } from "react-bootstrap"
import 'animate.css';
import proImg2 from "../../assets/img/project-img2.png"
import img1 from "../../assets/img/hack-proj-img1.png"

export const HackathonProject = () => {
    return (
        <Container className="animate__animated animate__fadeIn project-details">
            <Row>
                <Col md={8} className="">
                    <h2>Around.Me - HUJI Hackathon</h2><br />
                    <h5>
                        <b>Project Type: </b>Front-end web development, Mobile app development<br/>
                        <b>Technologies Used: </b>Angular, Bootstrap, PrimeNG, Android app development, Google API<br/>
                        <b>Time Frame: </b>24 Hour hackathon, Spring 2021<br/>
                    </h5>
                    <br />
                    <p>
                        In the Hebrew University of Jerusalem 2021 Hackathon, I helped develop Around.Me, a web and mobile app designed to support small businesses and local farmers in reaching their communities amidst the COVID-19 pandemic. <br /><br/>
                        With small businesses taking a hit during 2020, 
                        we saw a need for a dedicated platform beyond Facebook groups and WhatsApp chats to help small businesses connect with nearby customers. Around.Me provided a streamlined, accessible platform for both local vendors and buyers to connect and support each other. <br/><br/>
                        I helped with front-end development, creating an intuitive web interface. Additionally, I led the mobile app development, creating an app to help users locate nearby businesses easily.<br/><br/>
                    </p>
                </Col>
                <Col md={4}>
                    <img className="project-img" src={proImg2} />
                </Col>
            </Row>
            <Row>
                <Col size={12}>
                    <h5><b>Process</b></h5>
                    <p>
                    The hackathon’s theme was community, and our team looked for issues we could address with each of our skills. <br/>
                    During research, we looked into the surge in community purchase groups during the pandemic (I personally bought strawberries and avocados straight from the farmers). <br/>
                    We checked if similar solutions already exist and researched the viability of our idea. <br/>
                    considering the time limitations, we focused on creating a basic proof of concept, and managed to show a working mobile app. unfortunatly the web app has been lost to some forgotten Github repository.
                    </p>
                </Col>
            </Row>
            <Row>
            <Col className="image-col" size={12}>
                    <img className="project-img wide" src={img1} />
                    <figcaption>App Pitch Presentation</figcaption>
                </Col>
            </Row>
            <Row>
                <Col size={12}>
                <h5><b>Lessons</b></h5>
                    <ol>
                        <li>I Learned to identify and prioritize the needs of different user groups, balancing business goals and focusing on core user experience within hackathon time constraints.</li>
                        <li>Gained valuable experience in team collaboration, quick prototyping and MVP development in a high-pressure environment.</li>
                        <li>Regular feedback is key. During the entire day (and night), we had frequent check-ins, sharing progress, issues, and adjusting focus as needed.</li>
                        <li>During the night, we lost our web app and couldn’t recreate a working solution, losing an entire day’s work. We all commit changes to Github religiously since. </li>
                    </ol>
                </Col>
            </Row>
        </Container>
    )
}