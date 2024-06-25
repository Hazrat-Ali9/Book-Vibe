import { useLoaderData } from "react-router-dom";
import ShowBook from "./ShowBook";

const ShowBooks = () => {
    const books = useLoaderData();
    return (
        <div className="mt-5">
            <div>
                <h1 className="font-bold text-4xl text-center py-10">Books</h1>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 ">
                {books.map((book) => (
                    <ShowBook
                        key={book.id}
                        book={book}
                    ></ShowBook>
                ))}
            </div>
        </div>

    );
};

export default ShowBooks;