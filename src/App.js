import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { AboutMe } from './components/AboutMe';
import { Projects } from './components/Projects';
import { Footer } from './components/Footer';

function App() {
  return (

    <div className="App">
            <NavBar fullDisplay={true}/>
            <Banner />
            <AboutMe />
            <Projects />
            <Footer />
    </div>
  );
}

export default App;
