import { getReadBooks, getWishlistBooks } from "../utils";
import { useEffect, useState } from "react";
import Book from "../components/Book";

const ListedBooks = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const readBooks = getReadBooks();
    const wishlistBooks = getWishlistBooks();
    const [currentBooks, setCurrentBooks] = useState([]);

    const handleSortBy = option => {
        if (option === 1) {
            const sortedReadBooks = readBooks.sort((book1, book2) => book2.rating - book1.rating);
            const sortedWishlistBooks = wishlistBooks.sort((book1, book2) => book2.rating - book1.rating);
            if (tabIndex === 0) {
                setCurrentBooks(sortedReadBooks);
            }
            else if (tabIndex === 1) {
                setCurrentBooks(sortedWishlistBooks);
            }
        }
        else if (option === 2) {
            const sortedReadBooks = readBooks.sort((book1, book2) => book2.totalPages - book1.totalPages);
            const sortedWishlistBooks = wishlistBooks.sort((book1, book2) => book2.totalPages - book1.totalPages);
            if (tabIndex === 0) {
                setCurrentBooks(sortedReadBooks);
            }
            else if (tabIndex === 1) {
                setCurrentBooks(sortedWishlistBooks);
            }
        }
        else if (option === 3) {
            const sortedReadBooks = readBooks.sort((book1, book2) => book2.yearOfPublishing - book1.yearOfPublishing);
            const sortedWishlistBooks = wishlistBooks.sort((book1, book2) => book2.yearOfPublishing - book1.yearOfPublishing);
            if (tabIndex === 0) {
                setCurrentBooks(sortedReadBooks);
            }
            else if (tabIndex === 1) {
                setCurrentBooks(sortedWishlistBooks);
            }
        }
    }

    useEffect(() => {
        setCurrentBooks(readBooks);
    }, [])

    const currentDisplayBooks = (index) => {
        setTabIndex(index);
        if (tabIndex === 0) {
            setCurrentBooks(readBooks);
        }
        else if (tabIndex === 1) {
            setCurrentBooks(wishlistBooks);
        }
    }

    return (
        <div className="space-y-10">
            <h1 className="bg-[#1313130D] font-bold text-2xl text-center py-8 rounded-lg">Books</h1>

            {/* SortBy */}
            <div className="flex items-center justify-center">
                <div className="dropdown dropdown-bottom ">
                    <div tabIndex={0} role="button" className="btn m-1 bg-vibe-btn-primary text-white font-semibold text-lg">Sort By </div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li onClick={() => handleSortBy(1)}><a>Rating</a></li>
                        <li onClick={() => handleSortBy(2)}><a>Number of pages</a></li>
                        <li onClick={() => handleSortBy(3)}><a>Publisher year</a></li>
                    </ul>
                </div>
            </div>

            {/* NavLink */}
            <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden flex-nowrap mx-4">
                <a onClick={() => currentDisplayBooks(0)} rel="noopener noreferrer"
                    className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 border-gray-400 ${tabIndex === 0 ? 'border border-b-0' : 'border-b'}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                    </svg>
                    <span>Read Books</span>
                </a>
                <a onClick={() => currentDisplayBooks(1)} rel="noopener noreferrer"
                    className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 border-gray-400 ${tabIndex === 1 ? 'border border-b-0' : 'border-b'}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                    </svg>
                    <span>Wishlist Books</span>
                </a>
            </div>
            <div className="space-y-5 mx-4">
                {currentBooks.map((book, index) => (
                    <Book
                        key={index}
                        book={book}
                    ></Book>
                ))}
            </div>
        </div>
    );
};

export default ListedBooks;