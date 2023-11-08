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
        <div className='h-screen max-w-screen-xl mx-auto my-8 '>
            <h1 className='text-3xl font-bold text-center my-8'>Borrowed books for: {user?.displayName} {borrowedBooks.length}</h1>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {
                    borrowedBooks.map(book=><BorrowedBook key={book._id} book={book} borrowedBooks={borrowedBooks} setBorrowedBooks={setBorrowedBooks}/>)
                }
            </div>
        </div>
    );
};

export default BorrowedBooks;