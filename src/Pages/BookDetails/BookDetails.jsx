import { Link, useLoaderData, useNavigate } from "react-router-dom";
import useAuth from '../../Hooks/useAuth';
import axios from "axios";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import StarRatings from 'react-star-ratings';


const BookDetails = () => {
    const book = useLoaderData();
    //loading user from context
    const { user } = useAuth();
    const { _id, name, image, quantity, author, category, sdescription, rating } = book;
    //state for modal
    const [openModal, setOpenModal] = useState(false);
    //get the current date
    const currentDate = new Date().toISOString().split('T')[0];

    //setting previous borrowed books in a state
    const [previousBorrowedBooks, setPreviousBorrowedBooks] = useState([]);
    //check cart for the book (if book already exists or not)
    useEffect(() => {
        axios.get(`https://bookshelfserver-brown.vercel.app/borrowedBooks?email=${user.email}`)
            .then(res => setPreviousBorrowedBooks(res.data))
    }, [])

    //For redirecting user after borrowing book
    const navigate = useNavigate();

    const handleAddToCart = (e) => {
        //getting form data
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const returnDate = form.return_date.value;
        const borrowingDate = form.borrowing_date.value;
        const borrower = form.name.value;

        //check if his previousborrowed books has this book
        let bookMatched = false;
        previousBorrowedBooks.forEach(borowedBook => {
            if (borowedBook.bookID == _id && borowedBook.email == user?.email) {
                bookMatched = true;
            }
        })

        if (bookMatched) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Looks like you have already borrowed this book!"
            });
            setOpenModal(false);
            return;
        }
        setOpenModal(false);

        axios.post('https://bookshelfserver-brown.vercel.app/addToCart', {
            bookName: name,
            email,
            bookID: _id,
            returnDate,
            borrowingDate,
            borrower,
            image,
            category,

        })
            .then(res => {
                if (res.data.insertedId) {
                    axios.patch(`https://bookshelfserver-brown.vercel.app/updateStock/${_id}`, {
                        quantity: quantity - 1
                    })
                    Swal.fire({
                        title: "Good job!",
                        text: "You have successfully borrowed the book!",
                        icon: "success"
                    });

                }
            })
            .catch(error => console.log(error))

        //redirect user to borrowed books
        navigate('/borrowedBooks');
    }

    return (
        <div className="lg:grid lg:grid-cols-2 w-3/4 lg:w-1/2 mx-auto gap-10 items-center justify-between mt-20">
            <div>
            <h1 className="text-4xl font-bold text-center my-8 text-white dark:text-black">Book Details</h1>
                <img src={image} alt="" />
            </div>
            <div className="text-white dark:text-black">
                <h1 className="text-3xl font-bold">{name}</h1>
                <p className="mt-10">{ }</p>
                <p className="my-2 text-xl"><span className="font-bold text-xl mr-2">Author:</span>{author} </p>
                <p className="my-2 text-xl"><span className="font-bold text-xl mr-2">Category:</span>{category} </p>
                <StarRatings
                    rating={rating}
                    starDimension="20px"
                    starSpacing="8px"
                />



                <p className="my-2 text-xl"><span className="font-bold text-xl mr-2">Short Description:</span>{sdescription} </p>
                {/* no stock message */}
                {
                    quantity < 1 &&
                    <p className="text-red-600 font-bold text-lg">No Stock Available!</p>
                }
                <button
                    className="btn text-white rounded-none bg-orange-500 mt-8"
                    disabled={quantity == 0 ? true : false}
                    onClick={() => {
                        //document?.getElementById('my_modal_5').showModal()
                        setOpenModal(true);
                    }}

                >Borrow Book
                </button>
                <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle" open={openModal}>
                    <div className="modal-box">
                        <h3 className="font-bold text-lg  text-black">Please Enter the Following Information</h3>
                        <div className="modal-action">
                            <form onSubmit={handleAddToCart} >
                                <div>
                                    <input defaultValue={user?.displayName} className="input input-bordered text-black" required type="text" name="name" placeholder="Full Name" />
                                    <input defaultValue={user?.email} className="input input-bordered  text-black" required type="email" name="email" placeholder="Email" />
                                    <label className="label">
                                        <span className="label-text">Return Date</span>
                                    </label>
                                    <input className="input input-bordered  text-black" required type="date" name="return_date" placeholder="Return Date" />
                                    <label className="label">
                                        <span className="label-text">Borrowing Date</span>
                                    </label>
                                    <input className="input input-bordered  text-black" value={currentDate} readOnly type="date" name="borrowing_date" placeholder="Return Date" />
                                </div>
                                <button
                                    className=" my-8 btn text-white rounded-none bg-orange-500">Borrow Book</button>
                            </form>
                        </div>
                    </div>
                </dialog>
            </div>
            <Link to={`/readBook/${_id}`} className="btn text-white rounded-none bg-orange-500 mt-4 ">Read this Book</Link>
        </div >
    );
};

export default BookDetails;