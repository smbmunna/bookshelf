import axios from 'axios';
import useAuth from '../../Hooks/useAuth';
import Swal from 'sweetalert2';
const BorrowedBook = ({book, setBorrowedBooks, borrowedBooks}) => {
    const {user}= useAuth();
    
    const {_id, bookName, image,bookID, author, category, sdescription,rating}=book;    
    // console.log(user.email);
    // console.log(bookID);
    
    
 
    // return book
    const handleReturn=(email, bookID)=>{
        axios.delete(`https://bookshelf-server-henna.vercel.app/delete/cart/${email}/${bookID}`)
        .then(res=>{
            if(res.data.deletedCount>0){
                Swal.fire({
                    title: "Success!",
                    text: "Book Returned Successfully!",
                    icon: "success"
                  });
                const remainingBooks= borrowedBooks.filter(borrowedBook=> borrowedBook._id!==_id);
                setBorrowedBooks(remainingBooks);
            }
        })
                
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
                        <button onClick={()=>handleReturn(user.email, bookID)} className="btn btn-primary">Return</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BorrowedBook;