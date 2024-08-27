import './App.css';
import Navbar from './Components/Header/navbar';
import Footer from './Components/Footer/footer';
import {Routes, Route} from 'react-router-dom';
import Home from './Components/Home/home';
import About from './Components/About/about';
import Contact from './Components/Contact/Contact';
import Projects from './Components/project/Projects';
import Service from './Components/Service/Service';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      
    </>
  );
}

export default App;
