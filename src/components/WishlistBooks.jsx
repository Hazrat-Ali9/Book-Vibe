// import { useContext } from "react";
// import { WishlistBooksContext } from "../pages/ListedBooks";
import Book from "./Book";

const WishlistBooks = () => {
    // const wishlistBooks = useContext(WishlistBooksContext);
    return (
        <div>
            {wishlistBooks.map((book) => (
                <Book 
                key={book.bookId}
                book={book}
                ></Book>
            ))}
        </div>
    );
};

export default WishlistBooks;