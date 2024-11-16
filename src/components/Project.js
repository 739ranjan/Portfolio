import { useState } from 'react';
import projects from '../data/projects.js';
import ProjectsCard from "./ProjectsCard";


const Project = () => {
    const p = projects.filter((project, index) => index<5);

    const [newProjects, setNewProject] = useState(p);

    const [btnTxt, setBtnTxt] = useState("Show More");
    const showAll = () => {
        if(btnTxt==="Show More"){
            setNewProject(projects);
            setBtnTxt("Show Less");
        }
        else{
            setNewProject(p);
            setBtnTxt("Show More");
        }
    }

    return (
        <div className="w-full h-fit p-5 sm:p-0 flex flex-col items-center mt-10 shadow-xl">
            <h1 className="heading text-center text-5xl md:text-5xl sm:text-3xl font-extrabold text-[#F0BF6C] mb-10">
                Projects
            </h1>
            <div className="flex flex-wrap justify-center items-baseline gap-5 mt-10 md:mt-8 sm:mt-6 w-full max-w-8xl mb-10">
                {newProjects.map((project, index) => (
                    <div className="flex justify-center items-center" key={index}>
                        <ProjectsCard project={project} />
                    </div>
                ))}
            </div>
            <button onClick={showAll}
            className='border-4 border-[#F0BF6C] font-bold px-4 py-2 rounded-xl text-xl text-[#F0BF6C] hover:border-black hover:text-white hover:bg-black'>{btnTxt}</button>

            <div className='w-3/4 flex justify-center items-center my-10'>
                <div className='w-1/2 bg-[#F0BF6C] h-1'></div>
                <div className='mx-2 text-[#F0BF6C] font-extrabold text-xl'>X</div>
                <div className='w-1/2 bg-[#F0BF6C] h-1'></div>
            </div>
        </div>
    );
};

export default Project;
