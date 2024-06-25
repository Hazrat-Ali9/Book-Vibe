// import { useContext } from "react";
// import { ReadBooksContext } from "../pages/ListedBooks";
import Book from "./Book";

const ReadBooks = () => {

    // const readBooks = useContext(ReadBooksContext);
    // console.log(readBooks);
    return (
        <div>
            {readBooks.map((book) => (
                <Book 
                key={book.bookId}
                book={book}
                ></Book>
            ))}

        </div>
    );
};

export default ReadBooks;