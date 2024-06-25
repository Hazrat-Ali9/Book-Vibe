import { NavLink } from 'react-router-dom';

import heroimg from '../assets/heroimg.png'

const Hero = () => {
    return (
        <section className="bg-[#1313130D]">
            <div className="container flex flex-col-reverse justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-around">
                <div className="flex flex-col justify-center gap-5 p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                    <h1 className="text-2xl lg:text-5xl font-bold leading-none">Books to freshen up your bookshelf
                    </h1>
                    <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                        <NavLink to={'ListedBook'} rel="noopener noreferrer" href="#" className="btn px-1 py-1 lg:px-8 lg:py-3 text-base lg:text-lg text-white bg-vibe-btn-primary font-semibold rounded">View The List</NavLink>
                    </div>
                </div>
                <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                    <img src={heroimg} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                </div>
            </div>
        </section>
    );
};

export default Hero;