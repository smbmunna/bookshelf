import axios from 'axios';
import useAuth from '../../Hooks/useAuth';
import Swal from 'sweetalert2';
const BorrowedBook = ({ book, setBorrowedBooks, borrowedBooks }) => {
    const { user } = useAuth();

    const { _id, bookName, image, bookID, category, borrowingDate, returnDate, quantity } = book;
    console.log(quantity);
    // console.log(user.email);
    // console.log(bookID);



    // return book
    const handleReturn = (email, bookID) => {
        axios.delete(`https://bookshelf-server-henna.vercel.app/delete/cart/${email}/${bookID}`)
            .then(res => {
                if (res.data.deletedCount > 0) {
                    Swal.fire({
                        title: "Success!",
                        text: "Book Returned Successfully!",
                        icon: "success"
                    });
                    const remainingBooks = borrowedBooks.filter(borrowedBook => borrowedBook._id !== _id);
                    setBorrowedBooks(remainingBooks);

                    //increase quantity
                    console.log('book quantity: ', quantity)
                    axios.patch(`https://bookshelf-server-henna.vercel.app/updateStock/return-book/${bookID}`, {
                        //quantity: quantity + 1
                    })
                        .then(res2 => {
                            console.log(res2);
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
                    {/* <Link to={`/book/${_id}`} className="btn btn-primary">Return</Link> */}
                    <button onClick={() => handleReturn(user.email, bookID)} className="btn text-white rounded-none bg-orange-500">Return</button>
                </div>
            </div>
        </div>

    );
};

export default BorrowedBook;