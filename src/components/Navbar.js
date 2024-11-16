import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = ({ aboutRef, skillsRef, educationRef, projectRef, contactRef }) => {
    const [navOpen, setNavOpen] = useState(false);

    const handleToggle = () => {
        setNavOpen(!navOpen);
    };

    const scrollToSection = (ref) => {
        if (ref && ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth' });
            setNavOpen(false); // Close the nav menu after selection
        }
    };

    return (
        <nav className="bg-[#2D2D2D] text-white p-5">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-3xl font-bold heading ml-4 md:ml-10 lg:ml-20">
                    <Link to="/">Shashi Ranjan</Link>
                </div>

                {/* Links (hidden on mobile) */}
                <div className="hidden md:flex space-x-6 lg:space-x-10 mr-4 lg:mr-20 text-lg">
                    <button onClick={() => scrollToSection(aboutRef)} className="hover:text-gray-400">About</button>
                    <button onClick={() => scrollToSection(skillsRef)} className="hover:text-gray-400">Skills</button>
                    <button onClick={() => scrollToSection(educationRef)} className="hover:text-gray-400">Education</button>
                    <button onClick={() => scrollToSection(projectRef)} className="hover:text-gray-400">Project</button>
                    <button onClick={() => scrollToSection(contactRef)} className="hover:text-gray-400">Contact</button>
                </div>

                {/* Hamburger Icon (visible on mobile) */}
                <div className="md:hidden">
                    <button onClick={handleToggle}>
                        {navOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {navOpen && (
                <div className="md:hidden bg-gray-700 text-white p-4 space-y-4">
                    <button onClick={() => scrollToSection(aboutRef)} className="block hover:text-gray-400">About</button>
                    <button onClick={() => scrollToSection(skillsRef)} className="block hover:text-gray-400">Skills</button>
                    <button onClick={() => scrollToSection(educationRef)} className="block hover:text-gray-400">Education</button>
                    <button onClick={() => scrollToSection(projectRef)} className="block hover:text-gray-400">Project</button>
                    <button onClick={() => scrollToSection(contactRef)} className="block hover:text-gray-400">Contact</button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
