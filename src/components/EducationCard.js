const EducationCard = ({education}) => {
    return(
        <div className="shadow-sm shadow-white bg-black rounded-md py-8 px-8 hover:bg-black text-white transition-transform duration-300 hover:scale-105">
            <div className="hover:opacity-50">
            <h2 className="text-2xl font-bold">{education.title}</h2>
            <h3 className="text-xl font-base mt-2 ml-5">{education.school}</h3>
            <h4 className="text-lg font-semibold mt-2 ml-5">{education.board}</h4>
            <div className='flex justify-between text-sm font-semibold mt-4'>
                <p className=" ml-5">{education.marks}</p>
                <p className=" mr-5">{education.startYear} - {education.endYear}</p>
            </div>
            </div>
        </div>
    );
}

export default EducationCard;