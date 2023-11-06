import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import AllBook from "../../Components/AllBook/AllBook";


const AllBooks = () => {
    const [allBooks, setAllBooks]= useState([]);
    //load all books
    useEffect(()=>{
        axios.get('http://localhost:5000/allBooks')
        .then(res=>setAllBooks(res.data))
    },[])
    return (
        <div>
            <h1>List of all Books {allBooks.length}</h1>            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {
                    allBooks.map(book=><AllBook key={book._id} book={book}/>)
                }
            </div>
        </div>
    );
};

export default AllBooks;