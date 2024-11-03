import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { AboutMe } from './components/AboutMe';
import { Projects } from './components/Projects';
import { Footer } from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { FinalProjet } from './components/Projects/FinalProject';
import { Main } from './components/Main';

function App() {
  return (

    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/final-project" element={<FinalProjet />} />
      </Routes>
    </div>
  );
}

export default App;
