import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState, useEffect, Fragment } from 'react';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import navIcon4 from '../assets/img/nav-icon4.svg';

export const NavBar = ({ fullDisplay }) => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }
        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Brand href="/">
                    Miri Aframov
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                        {fullDisplay &&
                            <Fragment><Nav.Link href="#about" className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('about')}>About Me</Nav.Link>
                                <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                            </Fragment>
                        }
                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href="#" title="LinkedIn"><img src={navIcon1} alt="" /></a>
                            <a href="#" title="GitHub"><img src={navIcon2} alt="" /></a>
                            <a href="#" title="Instagram"><img src={navIcon3} alt="" /></a>
                            <a href="#" title="Email"><img src={navIcon4} alt="" /></a>
                        </div>
                        {/* <button className='vvd' onClick={() => console.log("contact clicked")}>
                        <span>Let's Connect</span>
                    </button> */}
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}