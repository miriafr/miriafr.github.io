import { Col, Container, Row } from "react-bootstrap"
import 'animate.css';
import proImg1 from "../../assets/img/project-img1.png"
import img1 from "../../assets/img/final-proj-img1.png"
import img2 from "../../assets/img/final-proj-img2.png"

export const FinalProjet = () => {
    return (
        <Container className="animate__animated animate__fadeIn project-details">
            <Row>
                <Col md={8}>
                    <h2>Capstone Project: Intelligent Recipe Recommendation App</h2>
                    <br />
                    <h5>
                        <b>Project type: </b>Mobile app, Deep learning, Computer vision, Data processing <br />
                        <b>Technologies used: </b>PyTorch, Android Development
                    </h5>
                    <br />
                    <p>
                        For my capstone project, my project partner and I developed an AI-powered mobile app designed to simplify meal planning and reduce food waste.
                        The core idea is simple - the app uses computer vision to detect the contents of your refrigerator and then automatically suggests relevant recipes.<br /><br />
                        I was in charge of the NN model training and app development, and was activly invloved in all project aspects as part of our collaborative approach.<br /><br />
                    </p>
                </Col>
                <Col md={4}>
                    <img className="project-img" src={proImg1} />
                </Col>
            </Row>
            <Row>
                <Col className="image-col" md={3} sm={12} xs={12}>
                    <img className="project-img" src={img1} />
                    <figcaption>Fridge Image Detection</figcaption>
                </Col>
                <Col md={9} sm={12} xs={12}>
                    <h5>Process</h5>
                    <p>
                        To achieve our goal, I broke the challenge down into smaller steps. <br /><br />
                        First, I researched existing neural network models and frameworks, realizing that given our time and
                        resource constraints, we should focus on retraining an existing model rather than building a completely new one.
                        I selected a model that was capable of running on device without relying on internet connectivity and offered high accuracy. <br /><br />

                        Next, I processed our data, using the open-source OpenImage dataset, that we filtered into a collection of about 32,000 food images and 47 food item categories. <br /><br />
                    </p>
                </Col>
            </Row>
            <Row>
                <Col size={12}>
                    <p>
                        This was my first time training a large scale neural network model,
                        so I had to learn how to adapt to limited resources and adjust the parameters and requirements for it to match my desired outcome.<br /><br />
                        With my prior experience in Android app development, I explored basic UX patterns and designed the app.
                        Thanks to the help of our test users, I prioritized a clear and intuitive user flow while maintaining functionality.<br /><br />
                    </p>
                </Col>
            </Row>
            <Row>
                <Col md={6}>
                    <h5>Lessons</h5>
                    <ol>
                        <li>Breaking down a large scale project into smaller, more manageable steps helped us maintain progress
                            and allowed for better testing and validation at each stage. </li>
                        <li>The decision to use an existing model taught me to make tradeoffs between ideal results and real world usability.</li>
                        <li>Feedback from friends and family through user testing helped identify and solve UX issues. </li>
                        <li>I learned how to approach the challenge of implementing theoretical machine learning concepts into real world use. </li>
                    </ol>
                </Col>
                <Col className="image-col" md={6} sm={12}>
                    <img className="project-img wide" src={img2} />
                    <figcaption>Initial App design and Completed Design</figcaption>
                </Col>
            </Row>
        </Container>
    )
}