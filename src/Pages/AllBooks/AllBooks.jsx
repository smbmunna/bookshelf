import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import AllBook from "../../Components/AllBook/AllBook";
import useAuth from '../../Hooks/useAuth';


const AllBooks = () => {
    const { user, } = useAuth();
    const [allBooks, setAllBooks] = useState([]);

    //load all books
    const urlAllBooks = 'https://bookshelfserver-brown.vercel.app/allBooks';
    useEffect(() => {
        if (user && user.email) {
            axios.get(urlAllBooks, { withCredentials: true })
                .then(res => setAllBooks(res.data))
        }
    }, [user])
    //filter books
    const handleFilter = () => {
        axios.get('https://bookshelfserver-brown.vercel.app/availableBooks')
            .then(res => setAllBooks(res.data))

    }
    return (
        <div className=" md:max-w-screen-xl mx-8 md:mx-auto my-8 ">
            <h1 className="text-3xl font-bold text-center">List of all available Books {allBooks.length}</h1>
            <div className="grid">
                <button onClick={handleFilter} className="mx-auto btn text-white rounded-none bg-orange-500 my-4">Show Only Available Books</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {
                    allBooks.map(book => <AllBook key={book._id} book={book} />)
                }
            </div>
        </div>
    );
};

export default AllBooks;