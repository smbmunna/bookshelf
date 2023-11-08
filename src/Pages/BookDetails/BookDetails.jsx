import { Link, useLoaderData } from "react-router-dom";
import useAuth from '../../Hooks/useAuth';
import axios from "axios";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
const BookDetails = () => {
    const book = useLoaderData();
    //loading user from context
    const { user } = useAuth();
    const { _id, name, image, quantity, author, category, sdescription, rating } = book;
    
    

    //setting previous borrowed books in a state
    const [previousBorrowedBooks, setPreviousBorrowedBooks] = useState([]);
    //check cart for the book (if book already exists or not)
    useEffect(() => {
        axios.get(`https://bookshelf-server-henna.vercel.app/borrowedBooks?email=${user.email}`)
            .then(res => setPreviousBorrowedBooks(res.data))
    }, [])


    const handleAddToCart = (e) => {
        //getting form data
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const returnDate = form.return_date.value;
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
            return;
        }


        axios.post('https://bookshelf-server-henna.vercel.app/addToCart', {
            bookName: name,
            email,
            bookID: _id,
            returnDate,
            borrower

        })
            .then(res => {
                if (res.data.insertedId) {
                    axios.patch(`https://bookshelf-server-henna.vercel.app/updateStock/${_id}`, {
                        quantity: quantity - 1
                    })
                    //show alert
                    Swal.fire({
                        title: "Good job!",
                        text: "You have successfully borrowed the book!",
                        icon: "success"
                    });
                }
            })
            .catch(error => console.log(error))
    }

    return (
        // <div className="lg:grid lg:grid-cols-2 w-3/4 lg:w-1/2 mx-auto gap-10 items-center justify-between mt-20">
        <div className="lg:grid lg:grid-cols-2 w-3/4 lg:w-1/2 mx-auto gap-10 items-center justify-between mt-20">
            <div>
                <img src={image} alt="" />
            </div>
            <div className="text-black">
                <h1 className="text-3xl font-bold">{name}</h1>
                <p className="mt-10">{ }</p>
                <p><span className="font-bold mr-2">Announcement:</span> </p>
                <p><span className="font-bold mr-2">Display:</span> </p>
                <p><span className="font-bold mr-2">Operating System:</span> </p>
                <p><span className="font-bold mr-2">RAM:</span> </p>
                <p><span className="font-bold mr-2">Camera:</span></p>
                <p><span className="font-bold mr-2">Battery:</span></p>
                <button
                    className="btn btn-primary bg-[#2c2c2c91] rounded-none  mt-8"
                    disabled={quantity == 0 ? true : false}
                    onClick={() => document?.getElementById('my_modal_5').showModal()}
                    
                >Borrow Book
                </button>
                    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                        <div className="modal-box">
                            <h3 className="font-bold text-lg">Please Enter the Following Information</h3>
                            {/* <p className="py-4">Press ESC key or click the button below to close</p> */}
                            <div className="modal-action">
                                <form onSubmit={handleAddToCart} >
                                    {/* if there is a button in form, it will close the modal */}
                                    <div>
                                        <input defaultValue={user?.displayName} className="input input-bordered" required type="text" name="name" placeholder="Full Name" />
                                        <input defaultValue={user?.email} className="input input-bordered" required type="email" name="email" placeholder="Email" />
                                        <label className="label">
                                            <span className="label-text">Return Date</span>
                                        </label>
                                        <input className="input input-bordered" required type="date" name="return_date" placeholder="Return Date" />
                                    </div>
                                    <button
                                        className="btn">Borrow Book</button>
                                </form>
                            </div>
                        </div>
                    </dialog>
            </div>
            <Link to={`/readBook/${_id}`} className="btn btn-primary bg-[#2c2c2c91] rounded-none mt-4 ">Read this Book</Link>
        </div >
    );
};

export default BookDetails;