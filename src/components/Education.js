import educations from '../data/educations';
import EducationCard from './EducationCard';

const Education = () => {
  return (
    <div className="w-full h-fit p-5 sm:p-0 flex flex-col items-center mb-10 shadow-xl">
        <h1 className="heading text-center text-5xl md:text-5xl sm:text-3xl font-extrabold text-[#F0BF6C] my-10">
            Education
        </h1>
        <div className="flex flex-wrap justify-center gap-8 mt-10 md:mt-8 sm:mt-6 w-full max-w-6xl mb-10">
        {educations.map((education, index) => (
        <EducationCard education={education} key={index} />
    ))}
        </div>
    </div>
  );
};

export default Education;