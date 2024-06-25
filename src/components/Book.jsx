import { CiLocationOn } from "react-icons/ci";
import { IoPeopleOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types';

const Book = ({ book }) => {
    const { bookId, bookName, author, image, totalPages, rating, category, tags, publisher, yearOfPublishing } = book;
    return (
        <div className="grid lg:grid-cols-5 border-2 p-4 rounded-2xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center justify-center rounded-xl bg-[#1313130F]">
                <img src={image} alt="book image" />
            </div>
            <div className="lg:col-span-4 mt-4 lg:mt-0 lg: ml-4">
                <h1 className="font-bold text-2xl text-center lg:text-left">{bookName}</h1>
                <p className="font-medium text-base my-2 text-center lg:text-left">by : {author}</p>
                <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                    <div className="flex flex-col lg:flex-row items-center gap-4">
                        <p className="font-bold sm:text-center">Tag </p>
                        <div className="flex items-center gap-2">
                            {tags.map((tag, index) => (
                                <span key={index} className="bg-vibe-btn-primary bg-opacity-5 text-vibe-btn-primary rounded-2xl p-2 font-medium">#{tag}</span>
                            ))}
                        </div>

                    </div>

                    <div className="flex items-center gap-4">
                        <CiLocationOn></CiLocationOn>
                        <p>Year of Publishing: {yearOfPublishing}</p>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row lg:items-center gap-4 my-2">
                    <div className="flex items-center gap-4">
                        <IoPeopleOutline></IoPeopleOutline>
                        <p>Publisher: {publisher}</p>

                    </div>
                    <div className="flex items-center gap-4">

                        <IoPeopleOutline></IoPeopleOutline>
                        <p>Page {totalPages}</p>
                    </div>
                </div>
                <hr className="my-3"></hr>
                <div className="flex flex-col lg:flex-row gap-5">
                    <div className="flex gap-5">
                        <p className="px-4 py-2 text-base rounded-2xl bg-[#328EFF0F] text-[#328EFF]">Category: {category}</p>
                        <p className="px-4 py-2 text-base rounded-2xl bg-[#FFAC330F] text-[#FFAC33]">Rating: {rating}</p>

                    </div>
                    <NavLink to={`/book/${bookId}`} className="btn px-4 py-2 text-lg font-medium rounded-3xl bg-vibe-btn-primary text-white">
                        View Details
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

Book.propTypes = {
    book: PropTypes.object,
};

export default Book;