import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import AllBook from "../../Components/AllBook/AllBook";
import useAuth from '../../Hooks/useAuth';


const AllBooks = () => {
    const { user, } = useAuth();
    const [allBooks, setAllBooks] = useState([]);

    //load all books
    const urlAllBooks = 'https://bookshelf-server-henna.vercel.app/allBooks';    
    useEffect(() => {
        if (user && user.email) {
            axios.get(urlAllBooks, { withCredentials: true })
                .then(res => setAllBooks(res.data))
        }
    }, [user])
    //filter books
    const handleFilter = () => {
        axios.get('https://bookshelf-server-henna.vercel.app/availableBooks')
            .then(res => setAllBooks(res.data))

    }
    return (
        <div>
            <h1>List of all Books {allBooks.length}</h1>
            <button onClick={handleFilter} className="btn btn-primary">Filter Books</button>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {
                    allBooks.map(book => <AllBook key={book._id} book={book} />)
                }
            </div>
        </div>
    );
};

export default AllBooks;