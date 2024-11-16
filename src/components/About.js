const About = () => {
    return (
        <div className="w-full h-fit p-5 sm:p-0">
            <div className="lg:py-24 lg:px-40 md:py-10 md:px-10 sm:p-1">
                <h1 className="heading text-left text-5xl md:text-5xl sm:text-3xl font-extrabold text-[#FFC86B]">
                    About
                </h1>
                <div className="flex flex-col md:flex-row mt-10 md:mt-8 sm:mt-6 mb-5">
                    <div className="w-[150px] h-[3px] rounded bg-[#FFC86B] my-3 md:my-0 mr-5"></div>
                    <p className="text-left text-xl lg:text-xl md:text-xl sm:text-base text-white">
                        Enthusiastic software developer seeking a role where I can leverage my skills in Java, HTML, CSS, and JavaScript to create impactful, user-centric applications. I aim to build innovative, scalable solutions that drive user engagement and contribute to the overall success of the organization.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
