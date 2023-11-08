import { useLoaderData } from "react-router-dom";
import Book from "../../Components/Book/Book";
const Books = () => {
    const books = useLoaderData();
    return (
        <div className=" max-w-screen-xl mx-auto my-8 ">
            <h1 className="text-4xl font-bold my-8 text-center">Choose Your Favourite Books</h1>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4  max-w-6xl mx-auto">
                {
                    books.map(book => <Book key={book._id} book={book} />)
                }
            </div>
        </div>
    );
};

export default Books;