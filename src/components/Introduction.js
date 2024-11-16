import { FaDownload, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";

import profile from '../images/profile2.png';
import resume from '../images/Shashi_Ranjan_Resume1.pdf';
const Introduction = () => {
    return (
        <div className="flex flex-col md:flex-row xl:h-[80vh] md:h-[40vh] px-6 md:px-10 py-6 md:py-10 justify-between relative shadow-xl">
            {/* Left Section: Introduction Text */}
            <div className="text-white flex flex-col justify-center ml-6 md:ml-8 lg:ml-10 xl:ml-20  mb-8 md:mb-0 z-10">
                <p className="text-3xl md:text-4xl lg:text-5xl animate-typing">
                    I'm <span className="heading font-bold text-[#F0BF6C]">Shashi Ranjan</span>
                </p>
                <p className="text-2xl md:text-3xl mt-2">Full Stack Developer</p>
                <div className="flex gap-4 md:gap-6 lg:gap-8 mt-6 md:mt-10">
                    <a 
                    href="#contact"
                    className="border-[#F0BF6C] border-2 px-4 py-2 rounded-md hover:bg-[#F0BF6C] hover:border-white hover:text-black">
                        Contact Me
                    </a>
                    <a 
                        href={resume} 
                        download 
                        className="border-[#F0BF6C] border-2 px-4 py-2 rounded-md hover:bg-[#F0BF6C] hover:border-white hover:text-black flex items-center"
                    >
                        <span className="mr-2">Resume</span>
                        <FaDownload />
                    </a>
                </div>
            </div>

            {/* Right Section: Background Image */}
            <div 
                className="absolute right-0 top-0 h-full w-1/2 bg-cover bg-top mix-blend-color-soft-light"
                style={{ backgroundImage: `url(${profile})` }}
            ></div>
            
            {/* Social Links positioned at the bottom */}
            <div className="relative flex flex-col items-center md:items-end md:mr-4 lg:mr-10 z-10 mt-auto">
                <div className="flex flex-col justify-between items-center h-full mt-auto">
                    
                <div className="h-24 w-0.5 bg-white hidden md:block"></div>
                    <div className="flex space-x-4 md:flex-col md:space-x-0 text-white text-3xl md:text-4xl mt-4">
                        <a href="https://www.linkedin.com/in/739ranjan" target="_blank" rel="noopener noreferrer" className="mt-4 hover:text-[#0A66C2]">
                            <FaLinkedinIn />
                        </a>
                        <a href="https://www.twitter.com/739ranjan" target="_blank" rel="noopener noreferrer" className="mt-4 hover:text-[#1DA1F2]">
                            <FaTwitter />
                        </a>
                        <a href="https://www.github.com/739ranjan" target="_blank" rel="noopener noreferrer" className="mt-4 hover:text-black">
                            <FaGithub />
                        </a>
                        <a href="https://www.leetcode.com/u/739ranjan" target="_blank" rel="noopener noreferrer" className="mt-4 hover:text-[#FFA116]">
                            <SiLeetcode />
                        </a>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Introduction;
