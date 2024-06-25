import { useParams } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import { saveReadbook, saveWishlistBook } from "../utils";

const BookDetails = () => {
    const { id } = useParams();
    const books = useLoaderData();

    const book = books.find((book) => parseInt(id) === book.bookId)

    const { bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = book;

    console.log(parseInt(id), book);

    return (
        <div>
            <section className="my-5">
                <div className="container grid lg:grid-cols-2">
                    <div className="bg-[#1313130F] rounded-2xl">
                        <img src={image} alt="book image" className="w-full scale-75" />
                    </div>
                    <div className="flex flex-col w-full px-6 lg:w-2/3 md:px-8 lg:px-12 mt-5 lg:mt-0">
                        <h2 className="text-xl lg:text-3xl font-bold leading-none">{bookName} </h2>
                        <p className="mt-2 text-lg lg:text-xl font-medium">by : {author}</p>
                        <hr className="my-5"></hr>
                        <p className="font-medium text-xl">{category}</p>
                        <hr className="my-5"></hr>
                        <p className="text-base"><span className="font-bold">Review: </span>{review}</p>
                        <div className="flex items-center gap-4 mt-5">
                            <p className="font-bold">Tag </p>
                            {tags.map((tag, index) => (
                                <span key={index} className="bg-vibe-btn-primary bg-opacity-5 text-vibe-btn-primary rounded-xl p-1">#{tag}</span>
                            ))}
                        </div>
                        <hr className="my-5"></hr>
                        <div>
                            <p>Number of Pages: <span className="font-semibold">{totalPages} </span></p>
                            <p>Publisher: <span className="font-semibold">{publisher} </span></p>
                            <p>Year of Publishing: <span className="font-semibold">{yearOfPublishing}</span>  </p>
                            <p>Rating: <span className="font-semibold">{rating} </span></p>
                        </div>
                        <div className="space-x-4 mt-5">
                            <button onClick={() => saveReadbook(book)} className="btn px-8 py-3 text-lg font-medium border-2 rounded bg-white">Read</button>
                            <button onClick={() => saveWishlistBook(book)} className="btn px-8 py-3 text-lg font-medium rounded bg-vibe-btn-secondary text-white">Wishlist</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BookDetails;