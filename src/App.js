import React, { useRef } from 'react';
import About from "./components/About";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Skills from "./components/Skills";
import Introduction from "./components/Introduction";

const App = () => {
    const aboutRef = useRef(null);
    const skillsRef = useRef(null);
    const educationRef = useRef(null);
    const projectRef = useRef(null);
    const contactRef = useRef(null);

    return (
        <div className="bg-[#31333B]">
            <div className="bg-[#2D2D2D]">
                <Navbar 
                    aboutRef={aboutRef}
                    skillsRef={skillsRef}
                    educationRef={educationRef}
                    projectRef={projectRef}
                    contactRef={contactRef}
                />
                <Introduction />
            </div>
            <div ref={aboutRef}>
                <About />
            </div>
            <div ref={skillsRef}>
                <Skills />
            </div>
            <div className="bg-[#2D2D2D]" ref={educationRef}>
                <Education />
            </div>
            <div ref={projectRef}>
                <Project />
            </div>
            <div className="bg-[#2D2D2D]" ref={contactRef}>
                    <Contact />
                <Footer />
            </div>
        </div>
    );
}

export default App;
