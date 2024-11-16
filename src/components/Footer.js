import { FaGithub, FaYoutube, FaLinkedinIn, FaHackerrank } from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";

const Footer = () => {
    const youtube = "https://www.youtube.com/@codingworld9573";
    const linkedin = "https://www.linkedin.com/in/739ranjan";
    const github = "https://www.github.com/739ranjan";
    const hackerrank = "https://www.hackerrank.com/profile/ranjanshashi739";
    const gfg = "https://www.geeksforgeeks.org/user/739ranjan/";
    const leetcode = "https://www.leetcode.com/u/739ranjan";
    return (
        <footer className="text-white py-5 flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-16">
            <div className="hover:bg-transparent bg-red-500 rounded-full p-2">
                <a href={youtube} className="text-3xl text-white hover:text-red-500">
                    <FaYoutube/> 
                </a>
            </div>
            <div className="hover:bg-transparent bg-blue-500 rounded-full p-2">
                <a href={linkedin} className="text-3xl text-white hover:text-blue-500">
                    <FaLinkedinIn/> 
                </a>
            </div>
            <div className="hover:bg-transparent bg-white rounded-full p-2">
                <a href={github} className="text-3xl text-black hover:text-white">
                    <FaGithub/> 
                </a>
            </div>
            <div className="hover:bg-transparent bg-green-700 rounded-full p-2">
                <a href={hackerrank} className="text-3xl text-white hover:text-green-700">
                    <FaHackerrank/> 
                </a>
            </div>
            <div className="hover:bg-transparent bg-green-500 rounded-full p-2">
                <a href={gfg} className="text-3xl text-white hover:text-green-500">
                    <SiGeeksforgeeks/> 
                </a>
            </div>
            <div className="hover:bg-transparent bg-yellow-500 rounded-full p-2">
                <a href={leetcode} className="text-3xl text-white hover:text-yellow-500">
                    <SiLeetcode/> 
                </a>
            </div>
        </footer>
    )
}

export default Footer;
