const SkillsCard = ({ skill }) => {
    let IconComponent = skill.img;

    return (
        <div className="sm:w-[280px] w-[300px] h-[150px] flex flex-row md:flex-col justify-evenly items-center rounded-xl bg-[#3D3E42] hover:bg-[#F0BF6C] p-4 md:p-5 m-2 transition duration-300 ease-in-out">
            {/* Icon Section */}
            <div className="text-white flex justify-center items-center w-1/2 md:w-auto">
                <IconComponent className="text-6xl" style={{ color: skill.color }} />
            </div>
            {/* Text Section */}
            <div className="text-white w-1/2 md:w-auto md:text-left">
                <p className="text-2xl  text-center font-semibold p-auto">{skill.title}</p>
            </div>
        </div>
    );
};

export default SkillsCard;
