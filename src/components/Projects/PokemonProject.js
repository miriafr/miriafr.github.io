import { Col, Container, Row } from "react-bootstrap"
import 'animate.css';
import pokePreviewImg from "../../assets/img/pokemon-project.png"

export const PokemonProject = () => {
    return (
        <Container className="animate__animated animate__fadeIn project-details">
            <Row>
                <Col md={8}>
            <h2>Who's That Pokémon? — Nostalgic Guessing Game</h2>
            <br />
            <h5>
                <b>Project Type: </b>Web app, Game UI, Audio interaction <br />
                <b>Technologies Used: </b>React, TypeScript, CSS Modules, PokéAPI<br/>
                <b>Time Frame: </b>Summer 2025
            </h5>
            <br />
            <p>
                A playful browser game inspired by the classic anime segment, built using React and TypeScript. Players are shown a silhouetted sprite and guess which Pokémon it is—complete with basic anime inspired styling, sound effects, and retro vibes.<br /><br />
                I focused on building smooth state transitions, user experience, sound toggling, and nostalgic UI inspired by the Game Boy and early anime intros. Special attention went into layout and responsiveness for a polished feel.<br /><br />
                <a href="https://whos-that-pokemon-nu.vercel.app" target="_blank" rel="noopener noreferrer">
                    Try it live
                </a>
            </p>
        </Col>
        <Col md={4}>
            <img className="project-img" src={pokePreviewImg} />
        </Col>
            </Row>
        </Container>
    )
}