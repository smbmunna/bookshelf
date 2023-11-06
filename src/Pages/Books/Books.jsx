import { useLoaderData } from "react-router-dom";
import Book from "../../Components/Book/Book";
const Books = () => {
    const books = useLoaderData();
    const { category } = books;
    return (
        <div>
            <h1>Books for Category: {category}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {
                    books.map(book => <Book key={book._id} book={book} />)
                }
            </div>
        </div>
    );
};

export default Books;