import axios from 'axios';
import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'

const BorrowedBook = ({book}) => {
    const {_id, bookName, image, author, category, sdescription,rating}=book;    
    
 
    // return book
    const handleReturn=()=>{
        //increase book stock by 1
        axios.patch(`http://localhost:5000/updateStock/${_id}`,{
            //quantity: quantity+1
        })
        .then(res=>console.log(res.data))
        .catch(error=>console.log(error))
    }
    return (
        <div>
            <div className="card w-72 bg-base-100 shadow-xl">
                {/* <figure className="px-10 pt-10">
                    <img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
                </figure> */}
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{bookName}</h2>
                    <p>{sdescription}</p>
                    <div className="card-actions">
                        {/* <Link to={`/book/${_id}`} className="btn btn-primary">Return</Link> */}
                        <button onClick={handleReturn} className="btn btn-primary">Return</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BorrowedBook;