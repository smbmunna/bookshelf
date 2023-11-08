import useAuth from '../../Hooks/useAuth';
import { useEffect, useState } from "react";
import BorrowedBook from "../../Components/BorrowedBook/BorrowedBook";
const BorrowedBooks = () => {
    const [borrowedBooks, setBorrowedBooks] = useState([]);    
    const { user } = useAuth();
    //load email wise booked books
    useEffect(() => {
        fetch(`https://bookshelf-server-henna.vercel.app/borrowedBooks?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setBorrowedBooks(data));
    }, [])
    
    return (
        <div>
            <h1>Borrowed books for: {user?.email} {borrowedBooks.length}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {
                    borrowedBooks.map(book=><BorrowedBook key={book._id} book={book} />)
                }
            </div>
        </div>
    );
};

export default BorrowedBooks;