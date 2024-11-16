import skills from '../data/skills.js';
import SkillsCard from "./SkillsCard";

const Skills = () => {
    return (
        <div className="w-full h-fit p-5 sm:p-0 flex flex-col items-center shadow-xl">
            <h1 className="heading text-center text-5xl md:text-5xl sm:text-3xl font-extrabold text-[#F0BF6C] mb-10">
                My Skills
            </h1>
            <div className="flex flex-wrap justify-center gap-2 mt-10 md:mt-8 sm:mt-6 w-full max-w-7xl mb-10">
                {skills.map((skill, index) => (
                    <div className="flex justify-center items-center" key={index}>
                        <SkillsCard skill={skill} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
