import { AiFillYoutube, AiFillGithub, AiOutlineGlobal } from "react-icons/ai";

const ProjectsCard = ({ project }) => {
    return (

        <div className="rounded-xl max-w-[400px] shadow-sm shadow-white p-3 bg-black transition-transform duration-300 hover:-translate-y-3">
            {/* image section */}
            <div className="">
                <img src={project.img}
                className=" h-[200px] w-full rounded-t-md" />
            </div>
            {/* content section */}
            <div className="p-3 border-b-2">
                <h2 className="text-2xl font-extrabold text-[#F0BF6C] mt-2">{project.title}</h2>
                <h4 className="text-md font-semibold text-white mt-2 ml-2">Technologies used:<br />
                    {project.techUsed.map((tech, index) => (
                        <span key={index} className="text-sm font-normal ">{tech}{index < project.techUsed.length - 1 ? ', ' : ''}</span>
                    ))}
                </h4>
                <h4 className="text-md font-semibold text-white mt-2 ml-2">Features:
                    {project.features.map((feature, index) => (
                        <li key={index} className="text-sm font-normal">{feature}</li>
                    ))}
                </h4>
            </div>

            {/* link section */}
            <div className='flex justify-center gap-8 mt-4'>
                {/* youtube icon */}
                {
                    project.youtube && 
                    <div className="hover:bg-transparent bg-red-500 rounded-full p-2">
                        
                        <a href={project.youtube} className="text-3xl text-white hover:text-red-500">
                            <AiFillYoutube/> 
                        </a>
                    </div>
                }
                {/* website icon */}
                {
                    project.website && 
                    <div className="hover:bg-transparent bg-blue-600 rounded-full p-2">
                        <a href={project.website} className="text-3xl text-white hover:text-blue-600 ">
                            <AiOutlineGlobal/> 
                        </a>
                    </div>
                }
                {/* github icon */}
                {
                    project.github && 
                    <div className="hover:bg-transparent bg-white rounded-full p-2">
                    
                       <a href={project.github} className="text-3xl text-black hover:text-white">
                            <AiFillGithub/> 
                        </a>
                    </div>
                }
            </div>
        </div>
        
    );
}

export default ProjectsCard;
