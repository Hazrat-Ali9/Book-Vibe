import { IoIosStarOutline } from "react-icons/io";
import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types';

const ShowBook = ({ book }) => {

    const {bookId, bookName, image, tags, author, category, rating } = book;

    return (
        <NavLink to={`book/${bookId}`} className="max-w-xs p-6 rounded-md shadow-md mx-auto">
            <img src={image} alt="" className="object-cover object-center w-full rounded-md h-72 bg-gray-500" />
            <div className="mt-6 mb-2 flex flex-row gap-4">
                {tags.map((tag, index) => (
                    <span key={index} className="text-xs font-medium bg-vibe-btn-primary bg-opacity-5 p-2 rounded-lg text-vibe-btn-primary">{tag} </span>
                ))}
            </div>
            <div className="space-y-4">
                <h2 className="text-xl font-bold tracking-wide">{bookName}</h2>
                <p className="text-base font-medium">by : {author}</p>
                <hr className="border border-dashed "></hr>
                <div className="flex justify-between items-center">
                    <p className="font-medium">{category}</p>
                    <p className="flex items-center font-medium gap-2">{rating} <IoIosStarOutline /> </p>
                </div>
            </div>
        </NavLink>
    );
};

ShowBook.propTypes = {
    book: PropTypes.object,
};

export default ShowBook;