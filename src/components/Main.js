import { NavBar } from "./NavBar"
import { Banner } from "./Banner"
import { AboutMe } from "./AboutMe"
import { Projects } from "./Projects"
import { Footer } from "./Footer"

export const Main = () => {
    return (
        <div>
            <NavBar fullDisplay={true}/>
            <Banner />
            <AboutMe />
            <Projects />
            <Footer />
        </div>
    )
}