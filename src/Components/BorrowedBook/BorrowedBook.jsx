import axios from 'axios';
import useAuth from '../../Hooks/useAuth';
import Swal from 'sweetalert2';
const BorrowedBook = ({ book, setBorrowedBooks, borrowedBooks }) => {
    const { user } = useAuth();

    const { _id, bookName, image, bookID, category, borrowingDate, returnDate, quantity } = book;



    // return book
    const handleReturn = (email, bookID) => {
        axios.delete(`https://bookshelfserver-brown.vercel.app/delete/cart/${email}/${bookID}`)
            .then(res => {
                if (res.data.deletedCount > 0) {
                    const remainingBooks = borrowedBooks.filter(borrowedBook => borrowedBook._id !== _id);
                    setBorrowedBooks(remainingBooks);

                    //increase quantity                    
                    axios.patch(`https://bookshelfserver-brown.vercel.app/updateStock/return-book/${bookID}`, {
                    })
                        .then(res2 => {
                            //show alert
                            Swal.fire({
                                title: "Good job!",
                                text: "You have successfully returned the book!",
                                icon: "success"
                            });
                        })
                        .catch(error => {
                            console.log(error);
                        })
                }
            })

    }
    return (

        <div className="card w-full h-full bg-base-100 shadow-xl rounded-none">
            <figure className="relative ">
                <img src={image} alt="Shoes" className='md:h-80 w-full' />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{bookName}</h2>
                <p className='text-lg'><span className='font-bold'>Category:</span> {category}</p>
                <p className='text-lg'><span className='font-bold'>Borrow Date:</span>  {borrowingDate}</p>
                <p className='text-lg'><span className='font-bold'>Return Date:</span>  {returnDate}</p>
                <div className="card-actions">                    
                    <button onClick={() => handleReturn(user.email, bookID)} className="btn text-white rounded-none bg-orange-500">Return</button>
                </div>
            </div>
        </div>

    );
};

export default BorrowedBook;