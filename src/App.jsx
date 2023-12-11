import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Project from './components/Project';
import Hero from './components/Hero'; 
import About from './components/AboutMe';
import Contact from './components/Contact';
import Resume from './components/Resume';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Navigation />
        <Routes>
          <Route path="/" element={<Hero />} />  
          <Route path="/portfolio" element={<Project />} />
          <Route path="/about" element={<About />} />  
          <Route path="/works" element={<Project />} />  
          <Route path="/contact" element={<Contact />} />  
          <Route path="/resume" component={Resume} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
