import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaLinkedinIn } from "react-icons/fa";
import contact from '../images/contact.jpg';

const Contact = () => {

    return (
        <div className="w-full flex flex-col items-center pb-20 shadow-xl" id="contact">
            <h1 className="heading text-center text-5xl md:text-5xl sm:text-3xl font-extrabold text-white my-10">
                Contact Me
            </h1>

            <div className="w-full max-w-4xl flex flex-col md:flex-row items-center md:items-stretch bg-[#31333B] rounded-lg shadow-lg overflow-hidden border-2 border-white">


                <img src={contact}
                className="w-full md:w-1/2 space-y-4 opacity-80" />

                {/* Contact Details Section */}
                <div className="w-full md:w-1/2 h-full items-center md:h-auto p-6 flex text-white">
                    <div className="flex flex-col justify-center space-y-8">
                        
                        {/* Mobile */}
                        <div className="flex items-start">
                            <div className="shrink-0">
                                <div className="inline-block rounded-md text-2xl bg-[#F0BF6C] p-4 text-white">
                                    <FaPhoneAlt />
                                </div>
                            </div>
                            <div className="ml-6 grow">
                                <p className="mb-2 font-bold">Mobile Number</p>
                                <a href='tel:+917462089970' className="text-sm text-gray-400">+91 7462089970</a>
                            </div>
                        </div>
                        
                        {/* Email */}
                        <div className="flex items-start">
                            <div className="shrink-0">
                                <div className="inline-block rounded-md text-2xl bg-[#F0BF6C] p-4 text-white">
                                    <FaEnvelope />
                                </div>
                            </div>
                            <div className="ml-6 grow">
                                <p className="mb-2 font-bold">Email</p>
                                <a href='mailto:ranjanshashi739@gmail.com' className="text-sm text-gray-400">ranjanshashi739@gmail.com</a>
                            </div>
                        </div>

                        {/* Address */}
                        <div className="flex items-start">
                            <div className="shrink-0">
                                <div className="inline-block rounded-md text-2xl bg-[#F0BF6C] p-4 text-white">
                                    <FaMapMarkerAlt />
                                </div>
                            </div>
                            <div className="ml-6 grow">
                                <p className="mb-2 font-bold">Address</p>
                                <span className="text-sm text-gray-400">Noida, Uttar Pradesh</span>
                            </div>
                        </div>

                        {/* LinkedIn */}
                        <div className="flex items-start">
                            <div className="shrink-0">
                                <div className="inline-block rounded-md text-2xl bg-[#F0BF6C] p-4 text-white">
                                    <FaLinkedinIn />
                                </div>
                            </div>
                            <div className="ml-6 grow">
                                <p className="mb-2 font-bold">LinkedIn</p>
                                <a href="https://www.linkedin.com/in/739ranjan" className="text-sm text-gray-400">linkedin.com/in/739ranjan</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
